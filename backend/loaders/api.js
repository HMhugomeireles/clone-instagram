

const apiModule = async ({ app }) => {

  app.use(require('../routes'));

}

module.exports = apiModule;