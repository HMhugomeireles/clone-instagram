const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const Config = require('./config/config');
const mongoose = require('mongoose');
require('dotenv').config();


const SERVER_PORT = process.env.PORT || 3333;


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
  console.log(`Server is running in port:${SERVER_PORT}`)
});
