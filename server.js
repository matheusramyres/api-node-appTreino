const express = require('express');
const mongoose = require('mongoose');
const conncet = require('./database/connect');

const app = express();

app.use(express.json());

require('./model/Usuario');

const routes = require('./routes/routes');
app.use('/api',routes);

app.listen(3001,() => console.log("Server on PORT 3001"));