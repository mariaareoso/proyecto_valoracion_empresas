const apiUrl = 'http://localhost:9000';

async function fetchApi(path, { body, method }) {
  const token = localStorage.getItem('token');
  const headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
  if (token) {
    headers.append('Authorization', token);
  }
  const request = await fetch(`${apiUrl}${path}`, { headers: headers, method: method, body: JSON.stringify(body) });
  const json = await request.json();
  return json;
}

// User Anonimo

async function search(textoABuscar) {
  const userData = await fetchApi(`/resultadoBusqueda/?nombre_empresa=${textoABuscar}&sede=${textoABuscar}`, { method: 'GET' });
  return userData.data;
}

async function login(email, password) {
  const tokenData = await fetchApi('/users/login', { method: 'POST', body: { email, password } });
  const token = tokenData.token;
  return token;
}

async function register(email, password, repeatPassword, empleado, empresa) {
  await fetchApi('/users/register', { method: 'POST', body: { email, password, repeatPassword, empleado, empresa } });
}

// User Empleado 

async function getUserInfo(iduser) {
  const userData = await fetchApi(`/users/iduser/`, { method: 'GET' });
  return userData;
}

async function updateInfoUser(nombre, pais, ciudad, email, password) {
  await fetchApi('/users/udpdateinfouser', { method: 'PUT', body: { nombre, pais, ciudad, email, password } });
}

async function addJob(idE, id, puesto, fecI, fecF) {
  await fetchApi('/users/', { method: 'PUT', body: { idE, id, puesto, fecI, fecF } });
}

// User Empresa 

async function getEmpresaInfo(empresaid) {
  const empresaData = await fetchApi(`/empresainfo/${empresaid}`, { method: 'GET' });
  return { empresaData };
}

export { search, login, register, getUserInfo, getEmpresaInfo, updateInfoUser, addJob };