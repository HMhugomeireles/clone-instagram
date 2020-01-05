const socketIoModule = require('./socketio');
const mongooseModule = require('./mongoose');
const expressConfiguration = require('./express');
const apiModule = require('./api');

const loaders = async ({ expressApp }) => {

  const server = await socketIoModule({ app: expressApp });
  console.log("Module socketIo Loaded.");

  await mongooseModule({ app: expressApp });
  console.log("Module mongooseModule loaded.");

  expressConfiguration({ app: expressApp });
  console.log("Module expressConfiguration loaded.");

  await apiModule({ app: expressApp });
  console.log("Module apiModule loaded.");
  
  return server;
}

module.exports = loaders;