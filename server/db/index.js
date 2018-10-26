//go look in the models, there is the index.js associations

const db = require('./database');
//console.log("DataBase", db)
// register models
require('./models');

module.exports = db;