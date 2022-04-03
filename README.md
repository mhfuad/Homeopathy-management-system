npm install express
npm install --save-dev nodemon

npm install --save sequelize
npm install --save pg pg-hstore



const config = require('./config/db.config')
const Sequelize = require('sequelize');
const db = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    idle: config.pool.idle
  },
});

db.authenticate()
  .then(() => console.log("connected"))
  .catch(err => console.log(err))