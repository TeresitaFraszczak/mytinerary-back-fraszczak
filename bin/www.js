
 //IMPORTS
import app from '../app.js';
import debug from 'debug';
import http from 'http';
import { connect } from 'mongoose';

//var app = require('../app');
//var debug = require('debug')('mytinerary-back-fraszczak:server');
//var http = require('http');


//PORT
let port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */
//START SERVING
let server = http.createServer(app);
let ready = ()=> {
  console.log('server ready on port'+port);
  //connect('mongodb+srv://terefrak:<password>@cluster0.yueuj21.mongodb.net/')
  connect(process.env.LINK_DB)   //el metodo connect devuelve una promesa: trtabajar con then y catch o async await
    .then(()=>console.log( 'database connected'))
    .catch(err=>console.log(err))
}

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, ready);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
