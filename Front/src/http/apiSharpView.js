const apiUrl = 'http://localhost:8000';

async function fetchApi(path, { body, method }) {
  const token = localStorage.getItem('token');
  const headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
  if (token) {
    headers.append('Authorization', token);
  }
  const response = await fetch(`${apiUrl}${path}`, { headers: headers, method: method, body: JSON.stringify(body) });
  const json = await response.json();
  if (response.status >= 400) {
    throw new Error(json.error);
  }
  return json;
}

// User Anonimo

async function search(textoABuscar) {
  const userData = await fetchApi(`/resultadoBusqueda/?nombre_empresa=${textoABuscar}&sede=${textoABuscar}`, { method: 'GET' });
  return userData.data;
}

async function getEmpresaInfo(empresaid) {
  const empresaData = await fetchApi(`/empresainfo/${empresaid}`, { method: 'GET' });
  return { empresaData };
}

// User Empleado 

async function register(email, password, repeatPassword, empleado, empresa) {
  return await fetchApi('/users/register', { method: 'POST', body: { email, password, repeatPassword, empleado, empresa } });
}

async function login(email, password) {
  const data = await fetchApi('/users/login', { method: 'POST', body: { email, password } });
  return data;
}

async function addJob(idE, id, puesto, fecI, fecF) {
  return await fetchApi('/users/addjob', { method: 'PUT', body: { idE, id, puesto, fecI, fecF } });
}

async function getUserInfo(iduser) {
  const userData = await fetchApi(`/users/iduser/`, { method: 'GET' });
  return userData;
}

async function getUserDataJob(iduser) {
  const userData = await fetchApi(`/users/jobUser`, { method: 'GET' });
  console.log(userData);
  return userData;
}

async function updateInfoUser(nombre, primerApellido, segundoApellido, pais, ciudad, email, password, repeatPassword) {
  const userData = await fetchApi('/users/udpdateinfouser', { method: 'POST', body: { nombre, primerApellido, segundoApellido, pais, ciudad, email, password, repeatPassword } });
  return userData
}

async function deleteJob(id) {
  const JobData = await fetchApi('/users/deleteJob', { method: 'DELETE', body: { id } });
  return JobData
}

async function valorEmpresa(opinion, accesibilidad, ambiente_de_trabajo, sueldos, posibilidad_de_ascenso, conciliacion, estabilidad, empresaid, id) {
  const ratingData = await fetchApi(`/users/valorar/${empresaid}`, { method: 'PUT', body: { opinion, accesibilidad, ambiente_de_trabajo, sueldos, posibilidad_de_ascenso, conciliacion, estabilidad, empresaid, id } });
  return ratingData
}

async function updatePhoto(photo) {
  const photoData = await fetchApi('/users/photo', { method: 'PUT', body: { photo } });
  return photoData
}

//User Empresa 

async function addEmpresa(nombre_empresa, sede, web, bio, id) {
  const addEmpresaData = await fetchApi('/users/addempresa', { method: 'PUT', body: { nombre_empresa, sede, web, bio, id } });
  return addEmpresaData
}

async function getEmpresaSetInfo(iduser) {
  const empresaSetInfoData = await fetchApi(`/users/getSetempresa`, { method: 'GET' });
  return empresaSetInfoData;
}

async function getAspectos(idempresa) {
  const empresaSetInfoData = await fetchApi(`/users/getAspectos`, { method: 'POST', body: { idempresa } });
  return empresaSetInfoData;
}

async function getEmpresa(iduser) {
  const empresaInfoData = await fetchApi(`/users/getEmpresa`, { method: 'GET' });
  return empresaInfoData;
}

async function updateSetEmpresa(email, password, repeatPassword, id) {
  const updateSetEmpresaData = await fetchApi(`/users/updateSetEmpresa`, { method: 'PUT', body: { email, password, repeatPassword, id } });
  return updateSetEmpresaData;
}

async function updateEmpresa(web, sede, bio, empresaId, id) {
  const updateSetEmpresaData = await fetchApi(`/users/updateInfoEmpresa/${empresaId}`, { method: 'PUT', body: { web, sede, bio, id } });
  return updateSetEmpresaData;
}

async function ListEmpleados(empresaid) {
  const listEmpleadosData = await fetchApi(`/users/listempleados/${empresaid}`, { method: 'GET' });
  return listEmpleadosData;
}

async function listValoraciones(empresaid) {
  const listValoracionesData = await fetchApi(`/users/listvaloraciones/empresainfo/${empresaid}`, { method: 'GET' });
  return listValoracionesData;
}

async function validEmpleado(idaspecto, idempresa, id) {
  const updateSetEmpresaData = await fetchApi(`/users/validacionEmpleado/:idempresa`, { method: 'PUT', body: { idaspecto, idempresa, id } });
  return updateSetEmpresaData;
}

export {
  search,
  getEmpresaInfo,
  register,
  login,
  addJob,
  getUserInfo,
  getUserDataJob,
  updateInfoUser,
  deleteJob,
  valorEmpresa,
  updatePhoto,
  addEmpresa,
  getEmpresaSetInfo,
  getAspectos,
  getEmpresa,
  updateSetEmpresa,
  updateEmpresa,
  ListEmpleados,
  listValoraciones,
  validEmpleado
};