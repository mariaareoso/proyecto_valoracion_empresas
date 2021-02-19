'use strict';

const Joi = require('joi');

const { anonimoRepository } = require('../repositories');

async function getListEmpresa(req, res) {
  try {
    const { nombre_empresa, sede } = req.query;

    const listEmpresa = await anonimoRepository.getListEmpresa(nombre_empresa, sede);

    if (!listEmpresa) {
      throw new Error('No existen datos');
    }

    res.send({ data: listEmpresa });
  } catch (err) {
    if (err.name === 'ValidationError') {
      err.status = 400;
    }
    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

async function getEmpresaInfo(req, res) {
  try {
    const empresaId = req.params.idempresa;
    const empresa = await anonimoRepository.getEmpresa(empresaId);

    if (!empresa.datos) {
      const error = new Error('Empresa no emcontrada');
      error.status = 404;
      throw error;
    }

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

async function getListEmpresaValoracion(req, res) {
  try {
    const { mediaValoracion } = req.body;

    const schema = Joi.object({
      mediaValoracion: Joi.number(),
    });

    await schema.validateAsync({ mediaValoracion });

    const listEmpresa = await anonimoRepository.getListEmpresaValoracion(mediaValoracion);

    if (!listEmpresa) {
      throw new Error('No existen datos');
    }

    res.send({ listEmpresa: listEmpresa });
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
  getListEmpresa,
  getEmpresaInfo,
  getListEmpresaValoracion,
};
