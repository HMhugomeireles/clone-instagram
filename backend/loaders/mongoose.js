const mongoose = require('mongoose');
const Config = require('./../config/config');

async function mongoModule() {

  await mongoose.connect(Config.CONNECTING_MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  });

}

module.exports = mongoModule;