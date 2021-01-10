const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const {
    anonimoRepository,
    empleadoRepository,
    empresaRepository
  } = require('../repositories');
const { query } = require('express');

async function addEmpresa(req, res) {
    try {   
      const { nombre_empresa, sede, link, bio} = req.body;
  
      const schema = Joi.object({
        nombre_empresa: Joi.string(),
        sede: Joi.string(),
        link: Joi.string(),
        bio: Joi.string().min(5).max(150)
      });
  
      await schema.validateAsync({ nombre_empresa, sede, link, bio});

      const empresa = await empresaRepository.creatreEmpresa(nombre_empresa, sede, link, bio, req.auth.id);
  
      res.send(empresa);
    } catch (err) {
      if(err.name === 'ValidationError'){
        err.status = 400;
      }
      console.log(err);
      res.status(err.status || 500);
      res.send({ error: err.message });
    }
  }

  async function getEmpresaSetInfo(req, res) {
    try {
  
      const empresa = await empresaRepository.getSetEmpresa(req.auth.id);
  
      res.send(empresa);
    } catch (err) {
      if(err.name === 'ValidationError'){
        err.status = 400;
      }
      console.log(err);
      res.status(err.status || 500);
      res.send({ error: err.message });
    }
  }

async function updateSetEmpresa(req, res) {
  try {   
    const { email, password, link } = req.body;

    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().min(4).max(20),
      link: Joi.string(),
    });

    await schema.validateAsync({ email, password, link});

    const passwordHash = await bcrypt.hash(password, 10);
    const setEmpresa = await empresaRepository.updateSetEmpresa(email, passwordHash, link, req.auth.id);

    res.send(setEmpresa);
  } catch (err) {
    if(err.name === 'ValidationError'){
      err.status = 400;
    }
    console.log(err);
    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

async function updateEmpresa(req, res) {
  try {   
    const { sede, bio, link} = req.body;

    const schema = Joi.object({
      sede: Joi.string(),
      bio: Joi.string(),
      link: Joi.string(),
    });

    await schema.validateAsync({ sede, bio, link});

    const empresaId = req.params.idempresa
    const cambiosEmpresa = await empresaRepository.updateEmpresa(sede, bio, link, empresaId, req.auth.id);
    
    res.send(cambiosEmpresa);
  } catch (err) {
    if(err.name === 'ValidationError'){
      err.status = 400;
    }
    console.log(err);
    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

async function listEmpleados(req,res) {
  try {   
      const idempresa = req.params.idempresa;

      console.log(idempresa);

      const listEmpleados = await empresaRepository.getListEmpleados(idempresa);

      if(!listEmpleados){
        throw new Error('No existen datos');
      }

      res.send({ listEmpleados });
  } catch (err) {
    if(err.name === 'ValidationError'){
      err.status = 400;
    }
    console.log(err);
    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

async function listValoraciones(req,res) {
  try {   
      const idempresa = req.params.idempresa;

      console.log(idempresa);

      const listaValoraciones = await empresaRepository.getReviews(idempresa);

      if(!listaValoraciones){
        throw new Error('No existen datos');
      }

      res.send({ listaValoraciones });
  } catch (err) {
    if(err.name === 'ValidationError'){
      err.status = 400;
    }
    console.log(err);
    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

async function valoracionEmpleado(req, res) {
  try {   
    const idempresa = req.params.idempresa;

    const reviewEmpleado = await empresaRepository.getReviewEmpleado(idempresa, req.auth.id);

    if(!reviewEmpleado){
      throw new Error('No existen datos');
    }

    res.send(reviewEmpleado );
} catch (err) {
  if(err.name === 'ValidationError'){
    err.status = 400;
  }
  console.log(err);
  res.status(err.status || 500);
  res.send({ error: err.message });
}
}

module.exports={
    addEmpresa,
    getEmpresaSetInfo,
    updateSetEmpresa,
    updateEmpresa,
    listEmpleados,
    listValoraciones,
    valoracionEmpleado
}