require('dotenv').config();
const loaders = require('./loaders');
const express = require('express');

async function startServer() {
  const app = express();
  
  const server = await loaders({ expressApp: app });
  
  server.listen(3333);
}

startServer();