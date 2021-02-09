const apiUrl = 'http://localhost:9000';

async function fetchApi(path, { body, method }) {
  const token = localStorage.getItem('token');
  const headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
  if (token) {
    headers.append('Authorization', token);
  }
  const request = await fetch(`${apiUrl}${path}`, { headers: headers, method: method, body: JSON.stringify(body) });
  const json = await request.json();
  console.log('request', request, json);
  return json;
}

async function login(email, password) {
  const tokenData = await fetchApi('/users/login', { method: 'POST', body: { email, password } });
  const token = tokenData.token;
  return token;
}

async function register(email, password) {
  await fetchApi('/users/register', {
    method: 'POST',
    body: { email, password },
  });
}

async function addJob(idempresa, puesto, fecI, fecF) {
  await fetchApi('/users/addjob', {
    method: 'POST',
    body: { idempresa, puesto, fecI, fecF },
  });
}

async function search(textoABuscar) {
  const userData = await fetchApi(`/resultadoBusqueda/?nombre_empresa=${textoABuscar}&sede=${textoABuscar}`, {
    method: 'GET',
  });
  console.log({ userData }, 'Respuesta Back');
  return userData.data;
}

async function getUserInfo(userId) {
  const userData = await fetchApi(`/users/${userId}`, { method: 'GET' });
  return userData.data;
}

export { login, register, addJob, getUserInfo, search };
