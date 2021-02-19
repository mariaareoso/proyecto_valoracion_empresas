'use strict';

const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { MAILGUN_KEY, DOMAIN } = process.env;
const mailgun = require('mailgun-js');

const { empleadoRepository, empresaRepository } = require('../repositories');

async function register(req, res) {
  try {
    const registerSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(4).max(20).required(),
      repeatPassword: Joi.ref('password'),
      empresa: Joi.number(),
      empleado: Joi.number(),
    });

    await registerSchema.validateAsync(req.body);

    const { email, password, empresa, empleado } = req.body;

    const user = await empleadoRepository.getUserByEmail(email);

    if (user) {
      const error = new Error('Ya existe un usuario con ese email');
      error.status = 409;
      throw error;
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const id = await empleadoRepository.createUser(email, passwordHash, empresa, empleado);

    const mg = mailgun({
      apiKey: MAILGUN_KEY,
      domain: DOMAIN,
    });
    const data = {
      from: 'User <me@samples.mailgun.org>',
      to: email,
      subject: 'Hello',
      text: 'http://localhost:3000/',
    };

    mg.messages().send(data, function (error, body) {
      console.log(body);
    });

    return res.send({ id });
  } catch (err) {
    if (err.name === 'ValidationError') {
      err.status = 400;
    }
    console.log(err);
    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(4).max(20).required(),
    });
    await schema.validateAsync({ email, password });

    const user = await empleadoRepository.getUserByEmail(email);
    const empresa = await empleadoRepository.getEmpresaByEmail(email);

    if (!user) {
      const error = new Error('No existe el usuario con ese email');
      error.code = 404;
      throw error;
    }

    const isValidPassword = await bcrypt.compare(password, user.clave);

    if (!isValidPassword) {
      const error = new Error('El password no es válido');
      error.code = 401;
      throw error;
    }

    const tokenPayload = { id: user.idusuario, name: user.nombre };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '30d' });

    res.send({ token, user, empresa });
  } catch (err) {
    if (err.name === 'ValidationError') {
      err.status = 400;
    }
    console.log(err);
    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

async function updateJob(req, res) {
  try {
    const { idE, puesto, fecI, fecF } = req.body;

    const schema = Joi.object({
      idE: Joi.number().positive().required(),
      puesto: Joi.string().required(),
      fecI: Joi.date().required(),
      fecF: Joi.date(),
    });

    await schema.validateAsync({ idE, puesto, fecI, fecF });

    const stateUser = await empleadoRepository.getStateUser(req.auth.id);

    if (stateUser[0].empleado === 1) {
      const Job = await empleadoRepository.creatreJob(idE, req.auth.id, puesto, fecI, fecF);
      const falseReview = await empleadoRepository.createReview(' ', 0, 0, 0, 0, 0, 0, idE, req.auth.id);
      return res.send(Job);
    } else {
      res.send('Eres un empresa');
    }
  } catch (err) {
    if (err.name === 'ValidationError') {
      err.status = 400;
    }
    console.log(err);
    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

async function getIdUser(req, res) {
  try {
    const userId = req.auth.id;

    const user = await empleadoRepository.getIdUser(userId);
    res.send(user);
  } catch (err) {
    if (err.name === 'ValidationError') {
      err.status = 400;
    }
    console.log(err);
    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

async function updateInfoUser(req, res) {
  try {
    const { nombre, primerApellido, segundoApellido, pais, ciudad, email, password, repeatPassword } = req.body;

    const schema = Joi.object({
      nombre: Joi.string().required(),
      primerApellido: Joi.string().required(),
      segundoApellido: Joi.string().required(),
      pais: Joi.string(),
      ciudad: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().required(),
      repeatPassword: Joi.ref('password'),
    });

    await schema.validateAsync({ nombre, primerApellido, segundoApellido, pais, ciudad, email, password, repeatPassword });

    const passwordHash = await bcrypt.hash(password, 10);

    const userInfo = await empleadoRepository.updateUser(nombre, primerApellido, segundoApellido, pais, ciudad, email, passwordHash, req.auth.id);

    res.send(userInfo);
  } catch (err) {
    if (err.name === 'ValidationError') {
      err.status = 400;
    }
    console.log(err);
    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

async function getUserDataJob(req, res) {
  try {
    const userId = req.auth.id;

    const user = await empleadoRepository.getUserDataJob(userId);
    res.send(user);
  } catch (err) {
    if (err.name === 'ValidationError') {
      err.status = 400;
    }
    console.log(err);
    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

async function deleteJob(req, res) {
  try {
    const { idaspecto } = req.body;
    const schema = Joi.number().positive().required();
    await schema.validateAsync(idaspecto);

    const Job = await empleadoRepository.getAspect(idaspecto);

    if (!Job) {
      throw new Error('Puesto no existe');
    }

    await empleadoRepository.deleteAspect(idaspecto);

    res.send({ message: 'Puesto borrado' });
  } catch (err) {
    console.log(err);
    if (err.name === 'ValidationError') {
      err.status = 400;
    }
    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

async function createReview(req, res) {
  try {
    const userId = req.auth.id;

    const {
      opinion,
      accesibilidad,
      ambiente_de_trabajo,
      sueldos,
      posibilidad_de_ascenso,
      conciliacion,
      estabilidad,
    } = req.body;

    const schema = Joi.object({
      opinion: Joi.string().min(4).max(150),
      accesibilidad: Joi.number().min(0).max(5),
      ambiente_de_trabajo: Joi.number().min(0).max(5),
      sueldos: Joi.number().min(0).max(5),
      posibilidad_de_ascenso: Joi.number().min(0).max(5),
      conciliacion: Joi.number().min(0).max(5),
      estabilidad: Joi.number().min(0).max(5),
    });
    const empresaid = req.params.idempresa;

    await schema.validateAsync({
      opinion,
      accesibilidad,
      ambiente_de_trabajo,
      sueldos,
      posibilidad_de_ascenso,
      conciliacion,
      estabilidad,
    });

    const validacion = await empleadoRepository.getValidacion(req.auth.id, empresaid);

    if (validacion[0].validacion === 1) {
      const review = await empleadoRepository.createReview(
        opinion,
        accesibilidad,
        ambiente_de_trabajo,
        sueldos,
        posibilidad_de_ascenso,
        conciliacion,
        estabilidad,
        empresaid,
        req.auth.id
      );

      return res.send({ review });
    } else {
      res.send('No estas validado por la empresa');
    }
  } catch (err) {
    console.log(err);
    if (err.name === 'ValidationError') {
      err.status = 400;
    }
    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

async function updatePhoto(req, res) {
  try {

    if (!req.files || !req.files.attachment) {
      const error = new Error('No hay foto');
      error.status = 400;
      throw error;
    }

    const savedPhoto = await empleadoRepository.updatePhotoUser(req.files.attachment, req.auth.id);

    res.send({ avatar: savedPhoto });
  } catch (err) {
    if (err.name === 'ValidationError') {
      err.status = 400;
    }
    console.log(err);
    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}


module.exports = {
  register,
  login,
  updateJob,
  getIdUser,
  updateInfoUser,
  deleteJob,
  createReview,
  updatePhoto,
  getUserDataJob
}
