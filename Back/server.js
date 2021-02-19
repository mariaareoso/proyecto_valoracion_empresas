'use strict';

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const { anonimoController, empleadoController, empresaController } = require('./controllers');

const validateAuth = require('./middlewares/validate-auth');

const { SERVER_PORT } = process.env;
const cors = require('cors');
const { join } = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());

// servir archivos estáticos
app.use(express.static('static'));

// anonimoUsers

app.get('/resultadoBusqueda', anonimoController.getListEmpresa);
app.get('/empresainfo/:idempresa', anonimoController.getEmpresaInfo);
app.get('/filtrovaloracion', anonimoController.getListEmpresaValoracion);

// empleadoUsers

app.post('/users/register', empleadoController.register);
app.post('/users/login', empleadoController.login);
app.put('/users/addjob', validateAuth, empleadoController.updateJob);
app.get('/users/iduser', validateAuth, empleadoController.getIdUser);
app.get('/users/jobUser', validateAuth, empleadoController.getUserDataJob);
app.post('/users/udpdateinfouser', validateAuth, empleadoController.updateInfoUser);
app.delete('/users/deleteJob', validateAuth, empleadoController.deleteJob);
app.put('/users/valorar/:idempresa', validateAuth, empleadoController.createReview);
app.put('/users/photo', validateAuth, empleadoController.updatePhoto);

// empresaUsers

app.put('/users/addempresa', validateAuth, empresaController.addEmpresa);
app.delete('/users/deletempresa/:idempresa', validateAuth, empresaController.deleteEmpresa);
app.get('/users/getSetempresa', validateAuth, empresaController.getEmpresaSetInfo);
app.post('/users/getAspectos', validateAuth, empresaController.getAspectos);
app.get('/users/getEmpresa', validateAuth, empresaController.getEmpresa);
app.put('/users/updateSetEmpresa', validateAuth, empresaController.updateSetEmpresa);
app.put('/users/updateInfoEmpresa/:idempresa', validateAuth, empresaController.updateEmpresa);
app.get('/users/listempleados/:idempresa', validateAuth, empresaController.listEmpleados);
app.get('/users/listvaloraciones/:idempresa', validateAuth, empresaController.listValoraciones);
app.get('/users/valoracionEmpleado/:idempresa', validateAuth, empresaController.valoracionEmpleado);
app.put('/users/validacionEmpleado/:idempresa', validateAuth, empresaController.validarEmpleado);
app.put('/users/logo', validateAuth, empresaController.updateLogo);

app.listen(SERVER_PORT, () => console.log(`Escuchando ${SERVER_PORT}`));