const mongoose = require('mongoose');
const Config = require('../config/config');

const mongooseModule = async ({ app }) => {
  
  mongoose.connect(Config.CONNECTING_MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
    
}

module.exports = mongooseModule;