const apiUrl = 'https://api2.bootcamp.hackaboss.com';

async function fetchTravelApi(path, { body, method }) {
  const token = localStorage.getItem('token');
  const headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
  if (token) {
    headers.append('Authorization', token);
  }
  const request = await fetch(`${apiUrl}${path}`, { headers: headers, method: method, body: JSON.stringify(body) });
  return await request.json();
}

async function login(email, password) {
  const tokenData = await fetchTravelApi('/users/login', { method: 'POST', body: { email, password } });
  const token = tokenData.data.token;
  localStorage.setItem('token', token);
  return token;
}
async function register(email, password) {
  await fetchTravelApi('/users/', {
    method: 'POST',
    body: { email, password, invite: 'moduloreact' },
  });
}

async function getUserInfo(userId) {
  const userData = await fetchTravelApi(`/users/${userId}`, { method: 'GET' });
  return userData.data;
}

export { login, register, getUserInfo };
