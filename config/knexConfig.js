// const Knex = require('knex') 
// require('dotenv').config();

// // configuration to connect to the database

// let knex = Knex({
//   client: process.env.DB_CLIENT,
//   connection: {
//     host :  process.env.DB_HOST,
//     port :  process.env.PORT,
//     user : process.env.DB_USER,
//     password : process.env.DB_PASSWORD,
//     database : process.env.DB_NAME
//   },
//   pool: {min:0, max:10},
//    migrations: {
//       directory: path.join(__dirname, './server/db/models/migrations'),
//     }
// });

// knex.raw("SELECT VERSION()").then(()=>{
//     console.log("connection to database successful")
// })



module.exports = knex