const mongoModule = require('./mongoose');
const socketIo = require('./socketio');
const apiModule = require('./apiModule');
const expressModule = require('./expressModule');

async function loaders({ expressApp }){


  const server = socketIo({ app: expressApp });

  await mongoModule();

  expressModule({ app:expressApp });

  apiModule({ app: expressApp });

  return server;
}

module.exports = loaders