'use strict';

const { query } = require('express');
const database = require('../infrastructure/database');
const { uploadPhoto } = require('../helpers');

async function getUserByEmail(email) {
  const pool = await database.getPool();
  const query = 'SELECT * FROM usuario WHERE email = ?';
  const [user] = await pool.query(query, email);

  return user[0];
}

async function getEmpresaByEmail(email) {
  const pool = await database.getPool();
  const query = 'SELECT * FROM usuario AS u JOIN empresa AS e ON u.idusuario = e.idusuario WHERE u.email= ?';
  const [empresa] = await pool.query(query, email);

  return empresa[0];
}

async function getIdUser(idUser) {
  const pool = await database.getPool();
  const query =
    'SELECT u.idusuario, u.nombre, u.primerApellido, u.segundoApellido, u.pais, u.ciudad, u.photo, u.empleado, u.empresa, e.nombre_empresa,e.paisEmpresa, e.sede,a.puesto, a.fecha_inicio, a.fecha_fin, u.email,u.clave,a.validacion FROM usuario AS u left JOIN aspecto AS a ON a.idusuario=u.idusuario JOIN empresa AS e ON a.idempresa=e.idempresa WHERE u.idusuario= ?';
  const [User] = await pool.query(query, [idUser]);
  return User;
}

async function getUserDataJob(idUser) {
  const pool = await database.getPool();
  const query =
    'SELECT e.idempresa, e.nombre_empresa,e.paisEmpresa, e.sede,a.puesto, a.fecha_inicio, a.fecha_fin,a.validacion FROM usuario AS u left JOIN aspecto AS a ON a.idusuario=u.idusuario JOIN empresa AS e ON a.idempresa=e.idempresa WHERE u.idusuario= ?'
  const [User] = await pool.query(query, [idUser]);

  console.log(User, 'User userEmpleadoRepository');
  return User;
}

async function createUser(email, password, empresa, empleado) {
  const pool = await database.getPool();
  const insertQuery = 'INSERT INTO usuario (email, clave, empresa, empleado) VALUES (?, ?, ?, ?)';
  const [created] = await pool.query(insertQuery, [email, password, empresa, empleado]);

  return created.insertId;
}

async function updateUser(nombre, primerApellido, segundoApellido, pais, ciudad, email, clave, id) {
  const pool = await database.getPool();
  const updateQuery = 'UPDATE usuario SET nombre = ?, primerApellido =?, segundoApellido=?,  pais = ?, ciudad = ?,  email = ?, clave = ?  WHERE idusuario = ?';
  await pool.query(updateQuery, [nombre, primerApellido, segundoApellido, pais, ciudad, email, clave, id]);

  return true;
}

async function getAspect(id) {
  const pool = await database.getPool();
  const query = 'SELECT * FROM aspecto WHERE idaspecto = ?';
  const [reviews] = await pool.query(query, id);

  return reviews[0];
}

async function getAspectVal(id, idempresa) {
  const pool = await database.getPool();
  const query = 'SELECT validacion FROM aspecto WHERE idusuario like ? and idempresa like ?';
  const [reviews] = await pool.query(query, id, idempresa);

  return reviews[0];
}

async function deleteAspect(id) {
  const pool = await database.getPool();
  const query = 'DELETE FROM aspecto WHERE idaspecto = ?';
  const [reviews] = await pool.query(query, id);

  return reviews[0];
}

async function getListEmpresa(nombre, sede) {
  const pool = await database.getPool();
  const query = 'SELECT nombre_empresa, sede, bio,photo FROM empresa WHERE nombre = ? || sede= ?';
  const [empresas] = await pool.query(query, [nombre, sede]);

  return empresas;
}

async function creatreJob(idE, id, puesto, fecI, fecF) {
  const pool = await database.getPool();
  const Query = 'INSERT INTO aspecto (idempresa,idusuario, puesto, fecha_inicio, fecha_fin) VALUES (?, ?, ?, ?,?)';
  await pool.query(Query, [idE, id, puesto, fecI, fecF]);

  return true;
}

async function getEmpresa(idempresa) {
  const pool = await database.getPool();
  const query =
    'SELECT nombre_empresa, sede, bio, opinion, accesibilidad, ambiente_de_trabajo, sueldos, posibilidad_de_ascenso, conciliacion, estabilidad, photo_empresa FROM empresa WHERE nombre=?';
  const [empresa] = await pool.query(query, [idempresa]);

  return empresa;
}

async function getValidacion(id, idempresa) {
  const pool = await database.getPool();
  const query = 'SELECT validacion FROM aspecto WHERE idusuario=? and idempresa=?';
  const [valicion] = await pool.query(query, [id, idempresa]);

  return valicion;
}

async function getStateUser(id) {
  const pool = await database.getPool();
  const query = 'SELECT empleado, empresa FROM usuario WHERE idusuario=?';
  const [stateUser] = await pool.query(query, [id]);

  return stateUser;
}

async function createReview(
  opinion,
  accesibilidad,
  ambiente_de_trabajo,
  sueldos,
  posibilidad_de_ascenso,
  conciliacion,
  estabilidad,
  idempresa,
  idusuario
) {
  const pool = await database.getPool();

  const insertQuery = 'UPDATE aspecto SET opinion=?, accesibilidad = ?, ambiente_de_trabajo = ?, sueldos = ?, posibilidad_de_ascenso = ? , conciliacion = ? , estabilidad = ? WHERE idempresa = ? AND idusuario= ?';
  const [created] = await pool.query(insertQuery, [
    opinion,
    accesibilidad,
    ambiente_de_trabajo,
    sueldos,
    posibilidad_de_ascenso,
    conciliacion,
    estabilidad,
    idempresa,
    idusuario,
  ]);

  return created.insertId;
}

async function getEmail(email) {
  const pool = await database.getPool();
  const query = 'SELECT email from usuario WHERE email = ?';
  const [valicion] = await pool.query(query, [email]);

  return valicion;
}

async function updatePhotoUser(photo, id) {
  const pool = await database.getPool();

  const savedPhoto = await uploadPhoto({
    photo,
    destination: 'avatars',
    width: 300,
    photoName: `avatar_${id}.png`
  })

  const query = 'UPDATE usuario SET photo=? WHERE idusuario=?';
  const [valicion] = await pool.query(query, [savedPhoto, id]);

  return savedPhoto;
}

module.exports = {
  getUserByEmail,
  createUser,
  getIdUser,
  updateUser,
  getAspect,
  getAspectVal,
  deleteAspect,
  getListEmpresa,
  creatreJob,
  getEmpresa,
  getValidacion,
  createReview,
  getEmail,
  getEmpresaByEmail,
  updatePhotoUser,
  getUserDataJob,
  getStateUser
};
