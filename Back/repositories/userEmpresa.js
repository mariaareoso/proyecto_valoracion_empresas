'use strict';

const database = require('../infrastructure/database');

async function creatreEmpresa(nombre_empresa, sede, photo, bio, idusuario) {
  const pool = await database.getPool();
  const Query = 'INSERT INTO empresa (nombre_empresa, sede, photo, bio, idusuario) VALUES(?,?,?,?,?)';
  await pool.query(Query, [nombre_empresa, sede, photo, bio, idusuario]);

  return true;
}

async function deleteEmpresa(idusuario, idempresa) {
  const pool = await database.getPool();
  const query = 'DELETE FROM empresa WHERE idusuario = ? AND idempresa = ?';
  const [empresa] = await pool.query(query, [idusuario, idempresa]);

  return true;
}

async function getSetEmpresa(idUser) {
  const pool = await database.getPool();
  const query = 'SELECT email, clave, photo FROM usuario WHERE idusuario = ?';
  const [Set] = await pool.query(query, [idUser]);

  return Set;
}

async function updateSetEmpresa(email, clave, photo, id) {
  const pool = await database.getPool();
  const updateQuery = 'UPDATE usuario SET email = ?, clave = ?, photo = ? WHERE idusuario = ?';
  await pool.query(updateQuery, [email, clave, photo, id]);

  return true;
}

async function getEmpresa(idempresa) {
  const pool = await database.getPool();
  const query =
    'SELECT nombre_empresa, sede, bio,photo, opinion, accesibilidad, ambiente_de_trabajo, sueldos, posibilidad_de_ascenso, conciliacion, estabilidad FROM empresa WHERE idempresa=?';
  const [empresa] = await pool.query(query, [idempresa]);

  return empresa;
}

async function updateEmpresa(sede, bio, photo, idempresa, idusuario) {
  const pool = await database.getPool();
  const updateQuery = 'UPDATE empresa SET sede = ?, bio = ?, photo=? WHERE idempresa = ? AND idusuario =?';
  await pool.query(updateQuery, [sede, bio, photo, idempresa, idusuario]);

  return true;
}

async function getListEmpleados(idempresa) {
  const pool = await database.getPool();
  const query =
    'SELECT u.nombre, a.puesto, a.fecha_inicio, a.fecha_fin, a.validacion FROM usuario AS u left JOIN aspecto AS a ON a.idusuario=u.idusuario JOIN empresa AS e ON a.idempresa=e.idempresa WHERE e.idempresa= ?';
  const [empleados] = await pool.query(query, [idempresa]);

  return empleados;
}

async function getReviews(idempresa) {
  const pool = await database.getPool();
  const query =
    'SELECT a.idempresa, u.nombre, a.opinion, ROUND((a.accesibilidad + a.ambiente_de_trabajo + a.sueldos + a.posibilidad_de_ascenso + a.conciliacion + a.estabilidad) / 6) AS valoracion FROM usuario AS u left JOIN aspecto AS a ON a.idusuario=u.idusuario WHERE a.idempresa= ?';
  const [reviews] = await pool.query(query, [idempresa]);

  return reviews;
}

async function getReviewEmpleado(idempresa, idusuario) {
  const pool = await database.getPool();
  const query =
    'SELECT a.idempresa, u.nombre, a.opinion, ROUND((a.accesibilidad + a.ambiente_de_trabajo + a.sueldos + a.posibilidad_de_ascenso + a.conciliacion + a.estabilidad) / 6) AS valoracion, a.accesibilidad, a.ambiente_de_trabajo, a.sueldos, a.posibilidad_de_ascenso, a.conciliacion, a.estabilidad FROM usuario AS u left JOIN aspecto AS a ON a.idusuario=u.idusuario WHERE a.idempresa= ? AND a.idusuario = ?';
  const [review] = await pool.query(query, [idempresa, idusuario]);

  return review;
}

async function relationIduserIdempresa(idempresa) {
  const pool = await database.getPool();
  const query = 'SELECT idusuario FROM empresa WHERE idempresa=?';
  const [verificacion] = await pool.query(query, idempresa);

  return verificacion;
}

async function uploadValidacion(idaspecto, idempresa, idpropietario) {
  const pool = await database.getPool();

  const propietarioQuery = 'SELECT idempresa from empresa WHERE idempresa=? AND idusuario=?';
  const propietarioCheck = await pool.query(propietarioQuery, [idempresa, idpropietario]);

  if (propietarioCheck[0].length === 0) {
    const error = new Error('No eres el propietario de la empresa');
    error.status = 401;
    throw error;
  }
  const query = 'UPDATE aspecto SET validacion = 1 WHERE idaspecto = ?';
  await pool.query(query, [idaspecto]);

  return true;
}

async function getIdEmpresa(idempresa) {
  const pool = await database.getPool();
  const query = 'SELECT idempresa FROM aspecto WHERE idempresa=?';
  const [empresa] = await pool.query(query, [idempresa]);

  return empresa;
}

module.exports = {
  creatreEmpresa,
  deleteEmpresa,
  getSetEmpresa,
  updateSetEmpresa,
  getEmpresa,
  updateEmpresa,
  getListEmpleados,
  getReviews,
  getReviewEmpleado,
  relationIduserIdempresa,
  uploadValidacion,
  getIdEmpresa,
};
