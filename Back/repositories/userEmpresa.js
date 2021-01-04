const database = require('../infrastructure/database');

async function createUser(email, password){
    const pool = await database.getPool();
    const insertQuery = 'INSERT INTO usuario (email, clave) VALUES (?, ?)';
    const [created] = await pool.query(insertQuery, [email, password]);
  
    return created.insertId;
}

async function creatreEmpresa(nombre, sede, sitio_web, link, resumen){
    const pool = await database.getPool();
    const Query = 'INSERT INTO empresa (nombre, sede, sitio_web, link, resumen) VALUES (?, ?, ?, ?, ?)';
    await pool.query(Query, [nombre, sede, sitio_web, link, resumen]);
  
    return true;
}

async function getSetEmpresa(idUser){
    const pool = await database.getPool();
    const query = 'SELECT email, clave, link FROM usuario';
    const [Set] = await pool.query(query, [idUser]);
  
    return Set;
}

async function updateSetEmpresa(email, clave, id){
    const pool = await database.getPool();
    const updateQuery = 'UPDATE usuario SET email = ?, clave = ?  WHERE idusuario = ?';
    await pool.query(updateQuery, [email, clave, id]);
  
    return true;
}

async function getEmpresa(idempresa){
    const pool = await database.getPool();
    const query = 'SELECT nombre, sede, bio,link, opinion, accesibilidad, ambiente_de_trabajo, sueldos, posibilidad_de_ascenso, conciliacion, estabilidad FROM empresa WHERE nombre=?';
    const [empresa] = await pool.query(query, [idempresa]);
  
    return empresa;
}

async function updateEmpresa(sede, web, bio, link, idempresa){
    const pool = await database.getPool();
    const updateQuery = 'UPDATE usuario SET sede = ?, web = ?,  bio = ?, link = ?  WHERE idempresa = ?';
    await pool.query(updateQuery, [sede, web, bio, link, idempresa]);
  
    return true;
}

async function getListEmpleados(idempresa){
    const pool = await database.getPool();
    const query = 'SELECT u.nombre, a.puesto, a.fecha_inicio, a.fecha_fin, a.validacion FROM usuario AS u left JOIN aspecto AS a ON a.idusuario=u.idusuario JOIN empresa AS e ON a.idempresa=e.idempresa WHERE e.idempresa= ?';
    const [empleados] = await pool.query(query, [idempresa]);
  
    return empleados;
}

async function getReviews(idempresa){
    const pool = await database.getPool();
    const query = 'SELECT a.idempresa, u.nombre, a.opinion, ROUND((a.accesibilidad + a.ambiente_de_trabajo + a.sueldos + a.posibilidad_de_ascenso + a.conciliacion + a.estabilidad) / 6) AS valoracion FROM usuario AS u left JOIN aspecto AS a ON a.idusuario=u.idusuario WHERE a.idempresa= ?';
    // Falta añadir el filtro por puntuacion
    const [reviews] = await pool.query(query, [idempresa]);
  
    return reviews;
}

async function getReviewEmpleado(idempresa, idusuario){
    const pool = await database.getPool();
    const query = 'SELECT a.idempresa, u.nombre, a.opinion, ROUND((a.accesibilidad + a.ambiente_de_trabajo + a.sueldos + a.posibilidad_de_ascenso + a.conciliacion + a.estabilidad) / 6) AS a.valoracion, a.accesibilidad, a.ambiente_de_trabajo, a.sueldos, a.posibilidad_de_ascenso, a.conciliacion, a.estabilidad FROM usuario AS u left JOIN aspecto AS a ON a.idusuario=u.idusuario WHERE a.idempresa= ? AND a.idusuario = ?';
    const [review] = await pool.query(query, [idempresa,idusuario]);
  
    return review;
}

module.exports= {
    createUser,
    creatreEmpresa,
    getSetEmpresa,
    updateSetEmpresa,
    getEmpresa,
    updateEmpresa,
    getListEmpleados,
    getReviews,
    getReviewEmpleado
}