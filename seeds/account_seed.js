/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('accounts').del()
  .then(function() { // Inserts seed entries one by one in series
      return knex('shows').insert({
        firstName:"Maru",
        lastName:"Koch",
        email:"marukoch@gmail.com",
        phone:"09012658442",
        password:"maru1234"
      });
    }).then(function () {
      return knex('shows').insert({
        firstName:"Norah",
        lastName:"Clone",
        email:"clone@gmail.com",
        phone:"09012658443",
        password:"norah1234"
      });
    }).then(function () {
      return knex('shows').insert({
    firstName:"Homa",
    lastName:"Uriar",
    email:"homa@gmail.com",
    phone:"08012658442",
    password:"june1234"
      })
    })
}