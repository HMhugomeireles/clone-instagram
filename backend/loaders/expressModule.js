const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express')

function expressModule({ app }) {

  app.use('/files', express.static(path.resolve(__dirname,'..', 'uploads', 'resized')));
  app.use(cors());
  app.use(bodyParser.json());
}


module.exports = expressModule;