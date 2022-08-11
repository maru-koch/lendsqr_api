// Update with your config settings.
// knex configuration for mysql connection

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const pkg = require('../package.json')
const path = require('path')
const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host :  "127.0.0.1",
      port :  3306,
      user : "root",
      password : JSON.stringify(12345678),
      database : "lendersqrDB"
    },
    migrations: {
      directory: path.join(__dirname, './server/db/models/migrations'),
    }
  },
 production :{
    client: 'mysql',
    connection:{
      host :  process.env.DB_HOST,
      port :  process.env.PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_NAME
    },
    pool: {min: 2, max: 10},
    migrations: {
      directory: path.join(__dirname, './server/db/models/migrations'),
    }
  }
};


