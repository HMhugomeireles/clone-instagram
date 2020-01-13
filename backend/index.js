
require('dotenv').config();
const loader = require('./loaders');
const express = require('express');



async function startServer() {
  const app = express();
  const SERVER_PORT = process.env.PORT || 3333;

   const server = await loader({ expressApp: app })

  server.listen(SERVER_PORT, () => {
    console.log(`Server is running in port:${SERVER_PORT}`)
  });
}

startServer();