require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const {
  anonimoController,
  empleadoController,
  empresaController
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
app.put('/users/valorar/:idempresa', validateAuth, empleadoController.createReview);

// empresaUsers

app.put('/users/addempresa', validateAuth, empresaController.addEmpresa);
app.get('/users/getSetempresa', validateAuth, empresaController.getEmpresaSetInfo);
app.put('/users/updateSetEmpresa', validateAuth, empresaController.updateSetEmpresa);
app.put('/users/updateInfoEmpresa/:empresaId', validateAuth, empresaController.updateEmpresa);
app.get('/users/listempleados/:idempresa', validateAuth, empresaController.listEmpleados);
app.get('/users/listvaloraciones/:idempresa', validateAuth, empresaController.listValoraciones);
app.get('/users/valoracionEmpreleado/:idempresa', validateAuth, empresaController.valoracionEmpleado)


app.listen(SERVER_PORT, () => console.log(`Escuchando ${SERVER_PORT}`));