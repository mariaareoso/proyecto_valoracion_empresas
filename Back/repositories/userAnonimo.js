'use strict';

const database = require('../infrastructure/database');

async function getListEmpresa(nombre_empresa, sede) {
  const pool = await database.getPool();
  let query;
  let empresas;
  if (!nombre_empresa && !sede) {
    query = 'SELECT idempresa, nombre_empresa, sede, bio,link FROM empresa';
    [empresas] = await pool.query(query);
  } else {
    query = 'SELECT idempresa, nombre_empresa, sede, bio,link FROM empresa WHERE nombre_empresa LIKE ? OR sede LIKE ?';
    [empresas] = await pool.query(query, [`%${nombre_empresa}%`, `%${sede}%`]);
  }
  return empresas;
}

async function getEmpresa(idempresa) {
  const pool = await database.getPool();
  let query;
  let empresa;

  const queryEmpresa = 'SELECT e.nombre_empresa, e.sede, e.bio, e.link FROM empresa e WHERE e.idempresa= ?';
  const datosEmpresa = await pool.query(queryEmpresa, [idempresa]);

  const queryOpinionesEmpresa =
    'SELECT accesibilidad, ambiente_de_trabajo, sueldos, opinion, posibilidad_de_ascenso, conciliacion, estabilidad FROM aspecto WHERE idempresa= ?';
  const opinionesEmpresa = await pool.query(queryOpinionesEmpresa, [idempresa]);

  return {
    datos: datosEmpresa[0][0],
    opiniones: opinionesEmpresa[0],
  };
}

async function getListEmpresaValoracion(mediaValoracion) {
  const pool = await database.getPool();
  const query =
    'SELECT e.nombre_empresa, e.sede, e.bio,e.link,avg(ROUND((a.accesibilidad + a.ambiente_de_trabajo + a.sueldos + a.posibilidad_de_ascenso + a.conciliacion + a.estabilidad) /6)) as valoracion_total FROM empresa e JOIN aspecto a ON e.idempresa = a.idempresa AND ((a.accesibilidad + a.ambiente_de_trabajo + a.sueldos + a.posibilidad_de_ascenso + a.conciliacion + a.estabilidad) /6) < ? GROUP BY e.nombre_empresa, e.sede, e.bio, e.link';
  const [empresas] = await pool.query(query, [mediaValoracion]);

  return empresas;
}

module.exports = {
  getListEmpresa,
  getEmpresa,
  getListEmpresaValoracion,
};
