require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Config = require('./config/config');
const path = require('path');
const cors = require('cors');

const app = express();

const SERVER_PORT = process.env.PORT || 3333;

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(Config.CONNECTING_MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use('/files', express.static(path.resolve(__dirname, 'uploads', 'resized')));
app.use(cors());
app.use(bodyParser.json());
app.use(require('./routes'));


server.listen(SERVER_PORT, () => {
  console.log(`Server is runing in port:${SERVER_PORT}`)
});
