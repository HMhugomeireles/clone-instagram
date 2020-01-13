

function socketIo({ app }) {
  const server = require('http').Server(app);
  const io = require('socket.io')(server);
  
  app.use((req, res, next) => {
    req.io = io;
    next();
  });

  return server;
}

module.exports = socketIo;