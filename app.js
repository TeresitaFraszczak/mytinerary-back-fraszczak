//IMPORTS
import 'dotenv/config.js'
import __dirname from './utils.js';
//var createError = require('http-errors');
import createError from 'http-errors';
//var express = require('express');
import express from 'express';
//var path = require('path');
import path from 'path'
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');
import logger from 'morgan'
//var indexRouter = require('./routes/index');
import indexRouter from './routes/index.js'
import notFoundHandler from './middlewares/notFoundHandler.js'
import errorHandler from './middlewares/errorHandler.js'

import cors from 'cors'


let app = express();
//var usersRouter = require('./routes/users');

//var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(logger('dev')); //permite cada vez que hago a un apeticion al servidor la registra y la muestra en cons
app.use(express.json()); //me hbailita a leer el req.body leeer y devolver json
app.use(express.urlencoded({ extended: false })); //leer params querys
app.use(cors()); //para evita el error de concetar los distintos servidrores del front y back
app.use(express.static(path.join(__dirname, 'public'))); //archivos publics

//ROUTER
app.use('/api', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

export default app
