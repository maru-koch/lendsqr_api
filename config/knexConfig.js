const Knex = require('knex') 
require('dotenv').config();

// configuration to connect to the database

let knex = Knex({
  client: "mysql",
  connection: {
    host : "localhost",
    port : 3306,
    user : "root",
    password : 12345678,
    database : "lendersqrDB"
  },
  pool: {min:0, max:7}
});

// knex.raw("SELECT VERSION()").then(()=>{
//     console.log("connection to database successful")
// })



module.exports = knex