const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { sequelize } = require('./db');
const {usersRouter} = require ('../routes/users')

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev')); // Configuración básica de morgan para el registro de solicitudes HTTP

app.use("/users", usersRouter)

module.exports = {
    app
};