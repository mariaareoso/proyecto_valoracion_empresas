const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {
  formatDateBS
} = require('../helpers/helpers')

const {
  empleadoRepository,
  empresaRepository
} = require('../repositories');

async function register(req, res) {
    try{
      const registerSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(20).required(),
        repeatPassword: Joi.ref('password'),
      });
  
      await registerSchema.validateAsync(req.body);
  
      const {email, password } = req.body;
  
      const user = await empleadoRepository.getUserByEmail(email);
  
      if (user) {
        const error = new Error('Ya existe un usuario con ese email');
        error.status = 409;
        throw error;
      }
  
      const passwordHash = await bcrypt.hash(password, 10);
      const id = await empleadoRepository.createUser(email, passwordHash);
  
      return res.send({ id });
    }catch(err){
      if(err.name === 'ValidationError'){
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

      const tokenPayload = { id: user.idusuario, name: user.nombre};
      const token = jwt.sign(
        tokenPayload,
        process.env.JWT_SECRET,
        { expiresIn: '30d' },
      );
      
      res.send({token});
    }catch(err) {
      if(err.name === 'ValidationError'){
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
  
      await schema.validateAsync({ idE, puesto, fecI, fecF});

      const Job = await empleadoRepository.creatreJob(idE, req.auth.id, puesto, fecI, fecF);
  
      res.send(Job);
    } catch (err) {
      if(err.name === 'ValidationError'){
        err.status = 400;
      }
      console.log(err);
      res.status(err.status || 500);
      res.send({ error: err.message });
    }
  }
  
async function getIdUser(req, res) {
    try {
      const userId = req.auth.id

      const user = await empleadoRepository.getIdUser(userId);
  
      res.send(user);
    } catch (err) {
      if(err.name === 'ValidationError'){
        err.status = 400;
      }
      console.log(err);
      res.status(err.status || 500);
      res.send({ error: err.message });
    }
  }

async function updateInfoUser(req, res) {
    try {   
      const { nombre, pais, ciudad, email, password} = req.body;
  
      const schema = Joi.object({
        nombre: Joi.string().required(),
        pais: Joi.string(),
        ciudad: Joi.string(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
      });
  
      await schema.validateAsync({ nombre, pais, ciudad, email,password});

      const passwordHash = await bcrypt.hash(password, 10);

      const Job = await empleadoRepository.updateUser(nombre, pais, ciudad, email,passwordHash, req.auth.id);
  
      res.send(Job);
    } catch (err) {
      if(err.name === 'ValidationError'){
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

      if(!Job){
        throw new Error('Puesto no existe');
      }
  
      await empleadoRepository.deleteAspect(idaspecto);
  
      res.send({message: 'Puesto borrado' });
    } catch (err) {
      console.log(err);
      if(err.name === 'ValidationError'){
        err.status = 400;
      }
      res.status(err.status || 500);
      res.send({ error: err.message });
    }
  }

async function createReview(req,res) {
  try {
    const userId = req.auth.id;
    console.log(userId);

    const {opinion, accesibilidad, ambiente_de_trabajo, sueldos, posibilidad_de_ascenso, conciliacion, estabilidad } = req.body;
    
    const schema = Joi.object({
      opinion: Joi.string().min(4).max(150),
      accesibilidad: Joi.number().min(0).max(5),
      ambiente_de_trabajo: Joi.number().min(0).max(5),
      sueldos: Joi.number().min(0).max(5),
      posibilidad_de_ascenso: Joi.number().min(0).max(5),
      conciliacion: Joi.number().min(0).max(5),
      estabilidad: Joi.number().min(0).max(5),
    });
    const empresaid = req.params.idempresa
    console.log(empresaid)

    await schema.validateAsync({ opinion, accesibilidad, ambiente_de_trabajo, sueldos, posibilidad_de_ascenso, conciliacion, estabilidad });

    const review = await empleadoRepository.createReview(opinion, accesibilidad, ambiente_de_trabajo, sueldos, posibilidad_de_ascenso, conciliacion, estabilidad, empresaid, req.auth.id);

    console.log(review);
    res.send({review});

  } catch (err) {
    console.log(err);
    if(err.name === 'ValidationError'){
      err.status = 400;
    }
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
    createReview
  };