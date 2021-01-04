const Joi = require('joi');

  const {
    anonimoRepository
  } = require('../repositories');

async function getListEmpresa(req, res) {
    try {
      const {nombre, sede} = req.query;

      const listEmpresa = await anonimoRepository.getListEmpresa(nombre,sede);

      if(!listEmpresa){
        throw new Error('No existen datos');
      }

      res.send({ listEmpresa:listEmpresa });
  } catch (err) {
    if(err.name === 'ValidationError'){
      err.status = 400;
    }
    console.log(err);
    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

async function getEmpresaInfo(req, res) {
  try {
    const empresaId = req.params.idempresa
    const empresa = await anonimoRepository.getEmpresa(empresaId);

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

module.exports = {
  getListEmpresa,
  getEmpresaInfo
};

