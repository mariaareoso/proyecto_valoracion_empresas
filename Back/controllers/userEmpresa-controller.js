'use strict';

const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { empleadoRepository, empresaRepository } = require('../repositories');

async function addEmpresa(req, res) {
  try {
    const { nombre_empresa, sede, photo, bio } = req.body;

    const schema = Joi.object({
      nombre_empresa: Joi.string(),
      sede: Joi.string(),
      bio: Joi.string().min(5).max(150),
    });

    await schema.validateAsync({ nombre_empresa, sede, bio });

    const stateUser = await empleadoRepository.getStateUser(req.auth.id);

    if (stateUser.empresa === 1) {
      const empresa = await empresaRepository.creatreEmpresa(nombre_empresa, sede, bio, req.auth.id);

      return res.send(empresa);
    } else {
      const error = new Error('Eres un empleado');
      error.status = 403;
      throw error;
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

async function deleteEmpresa(req, res) {
  try {
    const idempresa = req.params.idempresa;
    const iduser = req.auth.id;

    const idusuario = await empresaRepository.relationIduserIdempresa(idempresa);

    if (req.auth.id === idusuario[0].idusuario) {
      await empresaRepository.deleteEmpresa(iduser, idempresa);
      return res.send({ message: 'Empresa borrada' });
    } else {
      return res.send('Usuario no valido');
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

async function getEmpresaSetInfo(req, res) {
  try {
    const empresa = await empresaRepository.getSetEmpresa(req.auth.id);

    res.send(empresa);
  } catch (err) {
    if (err.name === 'ValidationError') {
      err.status = 400;
    }
    console.log(err);
    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

async function updateSetEmpresa(req, res) {
  try {
    const { email, password, photo } = req.body;

    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().min(4).max(20)
    });

    await schema.validateAsync({ email, password });

    const user = await empleadoRepository.getUserByEmail(email);

    if (user.email === email) {
      const error = new Error('Ya existe un usuario con ese email');
      error.status = 409;
      throw error;
    } else {
      const passwordHash = await bcrypt.hash(password, 10);
      const setEmpresa = await empresaRepository.updateSetEmpresa(email, passwordHash, req.auth.id);
      return res.send(setEmpresa);
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

async function updateEmpresa(req, res) {
  try {
    const { sede, bio, photo } = req.body;

    const schema = Joi.object({
      sede: Joi.string().required(),
      bio: Joi.string().required()
    });

    await schema.validateAsync({ sede, bio });

    const empresaId = req.params.idempresa;

    const idusuario = await empresaRepository.relationIduserIdempresa(empresaId);

    if (req.auth.id === idusuario[0].idusuario) {
      await empresaRepository.updateEmpresa(sede, bio, empresaId, req.auth.id);
      return res.send({ message: 'Se han modificado los datos de la empresa' });
    } else {
      return res.send('Usuario no valido');
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

async function listEmpleados(req, res) {
  try {
    const idempresa = req.params.idempresa;

    console.log(idempresa);

    const listEmpleados = await empresaRepository.getListEmpleados(idempresa);

    if (!listEmpleados) {
      throw new Error('No existen datos');
    }

    res.send({ listEmpleados });
  } catch (err) {
    if (err.name === 'ValidationError') {
      err.status = 400;
    }
    console.log(err);
    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

async function listValoraciones(req, res) {
  try {
    const idempresa = req.params.idempresa;

    console.log(idempresa);

    const listaValoraciones = await empresaRepository.getReviews(idempresa);

    if (!listaValoraciones) {
      throw new Error('No existen datos');
    }

    res.send({ listaValoraciones });
  } catch (err) {
    if (err.name === 'ValidationError') {
      err.status = 400;
    }
    console.log(err);
    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

async function valoracionEmpleado(req, res) {
  try {
    const idusuario = req.body;
    const idempresa = req.params.idempresa;

    const reviewEmpleado = await empresaRepository.getReviewEmpleado(idempresa, idusuario.idusuario);

    if (!reviewEmpleado) {
      throw new Error('No existen datos');
    }

    res.send(reviewEmpleado);
  } catch (err) {
    if (err.name === 'ValidationError') {
      err.status = 400;
    }
    console.log(err);
    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

async function validarEmpleado(req, res) {
  try {
    const idempresa = req.params.idempresa;
    const idaspecto = req.body.idaspecto;
    const idpropietario = req.auth.id;

    const validacionEmpleado = await empresaRepository.uploadValidacion(idaspecto, idempresa, idpropietario);

    return res.send(validacionEmpleado);
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
  addEmpresa,
  deleteEmpresa,
  getEmpresaSetInfo,
  updateSetEmpresa,
  updateEmpresa,
  listEmpleados,
  listValoraciones,
  valoracionEmpleado,
  validarEmpleado,
};
