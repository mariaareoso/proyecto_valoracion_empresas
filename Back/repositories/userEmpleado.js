const database = require('../infrastructure/database');

async function getUserByEmail(email){
    const pool = await database.getPool();
    const query = 'SELECT * FROM usuario WHERE email = ?';
    const [user] = await pool.query(query, email);
  
    return user[0];
}

async function getIdUser(idUser){
    const pool = await database.getPool();
    const query = 'SELECT u.nombre, u.pais, u.ciudad, u.link, e.nombre,e.sede,a.puesto, a.fecha_inicio, a.fecha_fin, u.email,u.clave,a.validacion FROM usuario AS u left JOIN aspecto AS a ON a.idusuario=u.idusuario JOIN empresa AS e ON a.idempresa=e.idempresa WHERE u.idusuario= ? UNION SELECT u.nombre, u.pais u,ciudad, u.link, e.nombre,e.sede,a.puesto, a.fecha_inicio, a.fecha_fin, u.email, u.clave,a.validacion FROM usuario AS u right JOIN aspecto AS a ON a.idusuario=u.idusuario JOIN empresa AS e ON a.idempresa=e.idempresa WHERE u.idusuario=?';
    const [User] = await pool.query(query, [idUser, idUser]);
    
    return User;
}

async function createUser(email, password){
    const pool = await database.getPool();
    const insertQuery = 'INSERT INTO usuario (email, clave) VALUES (?, ?)';
    const [created] = await pool.query(insertQuery, [email, password]);
  
    return created.insertId;
}


async function updateUser(nombre, apellido_1, apellido_2, pais, ciudad, direccion, email, clave, id){
    const pool = await database.getPool();
    const updateQuery = 'UPDATE usuario SET nombre = ?, apellido_1 = ?,  apellido_2 = ?, pais = ?, ciudad = ?, direccion = ?, email = ?, clave = ?  WHERE idusuario = ?';
    await pool.query(updateQuery, [nombre, apellido_1, apellido_2, pais, ciudad, direccion, email, clave, id]);
    
    return true;
}

async function deleteAspect(id){
    const pool = await database.getPool(); 
    const query = 'DELETE FROM aspecto WHERE idaspecto = ?';
    const [reviews] = await pool.query(query, id);
    
    return reviews[0];
}

async function getListEmpresa(nombre, sede){
    const pool = await database.getPool();
    const query = 'SELECT nombre, sede, bio,link FROM empresa WHERE nombre = ? || sede= ?';
    const [empresas] = await pool.query(query, [nombre, sede]);
    
    return empresas;
}

async function creatreJob(idE, id, puesto, fecI, fecF){
    const pool = await database.getPool();
    const Query = 'INSERT INTO aspecto (idempresa, idusuario, puesto, fecha_inicio, fecha_fin) VALUES (?, ?, ?, ?,?)';
    await pool.query(Query, [idE, id, puesto, fecI, fecF]);
  
    return true;
}

async function getEmpresa(idempresa){
    const pool = await database.getPool();
    const query = 'SELECT nombre, sede, bio,link, opinion, accesibilidad, ambiente_de_trabajo, sueldos, posibilidad_de_ascenso, conciliacion, estabilidad FROM empresa WHERE nombre=?';
    const [empresa] = await pool.query(query, [idempresa]);
  
    return empresa;
}

async function createReview(idusuario, idempresa, opinion, accesibilidad, ambiente_de_trabajo, sueldos, posibilidad_de_ascenso, conciliacion, estabilidad){
    const pool = await database.getPool();
  
    const insertQuery = 'INSERT INTO empresa (idusuario, idempresa, opinion, accesibilidad, ambiente_de_trabajo, sueldos, posibilidad_de_ascenso, conciliacion, estabilidad) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const [created] = await pool.query(insertQuery, [
        idusuario, idempresa, opinion, accesibilidad, ambiente_de_trabajo, sueldos, posibilidad_de_ascenso, conciliacion, estabilidad
    ]);
  
    return created.insertId;
}

module.exports = {
    getUserByEmail,
    createUser,
    getIdUser,
    updateUser,
    deleteAspect,
    getListEmpresa,
    creatreJob,
    getEmpresa,
    createReview
}