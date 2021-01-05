require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const {
  anonimoController,
  empleadoController
 } = require('./controllers');

const validateAuth = require('./middlewares/validate-auth');

 const {
  SERVER_PORT,
} = process.env;

const app = express();

app.use(bodyParser.json());

// anonimoUsers

app.get('/resultadoBusqueda', anonimoController.getListEmpresa);
app.get('/empresainfo/:idempresa', anonimoController.getEmpresaInfo);

// empleadoUsers

app.post('/users/register', empleadoController.register);
app.post('/users/login', empleadoController.login);
app.put('/users/addjob', validateAuth, empleadoController.updateJob);
app.get('/users/iduser',validateAuth, empleadoController.getIdUser);
app.put('/users/udpdateinfouser',validateAuth, empleadoController.updateInfoUser);
app.delete('/users/deleteJob',validateAuth, empleadoController.deleteJob);



app.listen(SERVER_PORT, () => console.log(`Escuchando ${SERVER_PORT}`));
