'use strict';

const database = require('../infrastructure/database');

async function getListEmpresa(nombre_empresa, sede) {
  const pool = await database.getPool();
  let query;
  let empresas;
  if (!nombre_empresa && !sede) {
    query = 'SELECT nombre_empresa, sede, bio,link FROM empresa';
    [empresas] = await pool.query(query);
  } else {
    query = 'SELECT nombre_empresa, sede, bio,link FROM empresa WHERE nombre_empresa LIKE ? OR sede LIKE ?';
    [empresas] = await pool.query(query, [`%${nombre_empresa}%`, `%${sede}%`]);
  }
  return empresas;
}

async function getEmpresa(idempresa) {
  const pool = await database.getPool();
  let query;
  let empresa;
  // if ([]) {
  //   (query = 'SELECT e.nombre_empresa, e.sede, e.bio, e.link FROM empresa e WHERE e.idempresa= ?'),
  //     ([empresa] = await pool.query(query, [idempresa]));
  // } else {
  query =
    'SELECT e.nombre_empresa, e.sede, e.bio, e.link, a.accesibilidad, a.ambiente_de_trabajo, a.sueldos, a.opinion, a.posibilidad_de_ascenso, a.conciliacion, a.estabilidad FROM empresa e JOIN aspecto a ON  e.idempresa = a.idempresa  WHERE e.idempresa= ?';
  [empresa] = await pool.query(query, [idempresa]);
  // }
  console.log(empresa);
  return empresa;
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
