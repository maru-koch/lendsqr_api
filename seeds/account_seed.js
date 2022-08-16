/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('accounts').del()
  await knex('accounts').insert([
    {
    firstName:"Maru",
    lastName:"Koch",
    email:"marukoch@gmail.com",
    phone:"09012658442",
    password:"maru1234"
    },
    {
    firstName:"Norah",
    lastName:"Clone",
    email:"clone@gmail.com",
    phone:"09012658443",
    password:"norah1234"},
    {
    firstName:"Homa",
    lastName:"Uriar",
    email:"homa@gmail.com",
    phone:"08012658442",
    password:"june1234"
    }
  ]);
};