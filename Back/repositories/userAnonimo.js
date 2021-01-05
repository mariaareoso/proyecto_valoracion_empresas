const database = require('../infrastructure/database');

async function getListEmpresa(nombre_empresa, sede){
    const pool = await database.getPool();
    let query;
    let empresas;
    if (!nombre_empresa&&!sede){
        query ='SELECT nombre_empresa, sede, bio,link FROM empresa';
        [empresas] = await pool.query(query);
    }else{
        query = 'SELECT nombre_empresa, sede, bio,link FROM empresa WHERE nombre_empresa LIKE ? OR sede LIKE ?';
        [empresas] = await pool.query(query, [`%${nombre_empresa}%`,`%${sede}%` ]);
    }
    return empresas;
}

async function getEmpresa(idempresa){
    const pool = await database.getPool();
    const query = 'SELECT nombre_empresa, sede, bio,link, opinion, accesibilidad, ambiente_de_trabajo, sueldos, posibilidad_de_ascenso, conciliacion, estabilidad FROM empresa WHERE idempresa=?';
    const [empresa] = await pool.query(query, [idempresa]);
  
    return empresa;
}

module.exports = {
    getListEmpresa,
    getEmpresa

}