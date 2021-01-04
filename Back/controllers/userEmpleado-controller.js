const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {
  empleadoRepository
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
  

  module.exports = {
    register,
    login,
    updateJob

  };