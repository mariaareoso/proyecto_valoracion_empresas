'use strict';

const database = require('../infrastructure/database');

async function getListEmpresa(nombre_empresa, sede) {
  const pool = await database.getPool();
  let query;
  let empresas;
  if (!nombre_empresa && !sede) {
    query = 'SELECT DISTINCT e.idusuario, e.idempresa, e.nombre_empresa, e.sede, e.bio,e.photo_empresa FROM empresa e LEFT JOIN aspecto a ON e.idempresa = a.idempresa';
    [empresas] = await pool.query(query);
  } else {
    query = 'SELECT DISTINCT e.idusuario, e.idempresa, e.nombre_empresa, e.sede, e.bio,e.photo_empresa FROM empresa e LEFT JOIN  aspecto a ON e.idempresa = a.idempresa WHERE nombre_empresa LIKE ? OR sede LIKE ?';
    [empresas] = await pool.query(query, [`%${nombre_empresa}%`, `%${sede}%`]);
  }
  return empresas;
}

async function getEmpresa(idempresa) {
  const pool = await database.getPool();
  let query;
  let empresa;

  const queryEmpresa = 'SELECT e.idusuario, e.idempresa, e.nombre_empresa, e.sede, e.bio, e.photo_empresa, e.web FROM empresa e WHERE e.idempresa= ?';
  const datosEmpresa = await pool.query(queryEmpresa, [idempresa]);
  const queryOpinionesEmpresa = 'SELECT idusuario, accesibilidad, ambiente_de_trabajo, sueldos, opinion, posibilidad_de_ascenso, conciliacion, estabilidad FROM aspecto WHERE idempresa= ?';
  const opinionesEmpresa = await pool.query(queryOpinionesEmpresa, [idempresa]);
  const queryvaloracionesPorAspectoEmpresa = 'SELECT round(avg(accesibilidad)/COUNT(accesibilidad)) AS Accesibilidad, round(avg(ambiente_de_trabajo)/COUNT(ambiente_de_trabajo)) AS Ambiente_de_trabajo, round(avg(sueldos)/COUNT(sueldos)) AS Sueldo, round(avg(posibilidad_de_ascenso)/COUNT(posibilidad_de_ascenso)) AS Posibilidad_de_ascenso, round(avg(conciliacion)/COUNT(conciliacion)) AS Conciliacion, round(avg(estabilidad)/COUNT(estabilidad)) AS Estabilidad FROM aspecto WHERE idempresa= ?'
  const valoracionesPorAspectoEmpresa = await pool.query(queryvaloracionesPorAspectoEmpresa, [idempresa]);
  return {
    datos: datosEmpresa[0][0],
    opiniones: opinionesEmpresa[0],
    valoraciones: valoracionesPorAspectoEmpresa[0]
  };
}

async function getListEmpresaValoracion(mediaValoracion) {
  const pool = await database.getPool();
  const query =
    'SELECT e.nombre_empresa, e.sede, e.bio,e.photo,avg(ROUND((a.accesibilidad + a.ambiente_de_trabajo + a.sueldos + a.posibilidad_de_ascenso + a.conciliacion + a.estabilidad) /6)) as valoracion_total FROM empresa e JOIN aspecto a ON e.idempresa = a.idempresa AND ((a.accesibilidad + a.ambiente_de_trabajo + a.sueldos + a.posibilidad_de_ascenso + a.conciliacion + a.estabilidad) /6) < ? GROUP BY e.nombre_empresa, e.sede, e.bio, e.photo';
  const [empresas] = await pool.query(query, [mediaValoracion]);

  return empresas;
}


module.exports = {
  getListEmpresa,
  getEmpresa,
  getListEmpresaValoracion,

};
