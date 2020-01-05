const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const expressModule = ({ app }) => {

  app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));
  app.use(cors());
  app.use(bodyParser.json());

}

module.exports = expressModule;