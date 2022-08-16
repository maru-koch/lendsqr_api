/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  // Deletes ALL existing entries
  // using the nested async method to prevent random creation of rows
  // we want the rows to be created exactly the same way each time the code runs

  await knex('users').del()
  .then(function() { // Inserts seed entries one by one in series
      return knex('users').insert({
        firstName:"Maru",
        lastName:"Koch",
        email:"marukoch@gmail.com",
        phone:"09012658442",
        password:"maru1234"
      });
    }).then(function () {
      return knex('users').insert({
        firstName:"Norah",
        lastName:"Clone",
        email:"clone@gmail.com",
        phone:"09012658443",
        password:"norah1234"
      });
    }).then(function () {
      return knex('users').insert({
    firstName:"Homa",
    lastName:"Uriar",
    email:"homa@gmail.com",
    phone:"08012658442",
    password:"june1234"
      })
    })
}