
exports.up = knex.schema.hasTable('users').then(function(exists) {

    // a schema to create the user table if it does not exist

  if (!exists) {
    return knex.schema.createTable('accounts', function(table) {
        table.increments('id').primary()
        table.string('firstName').notNullable()
        table.string('lastName').notNullable()
        table.string('email').notNullable()
        table.string('password')
        table.string('phoneNumber')
        table.timestamps(true, true)
    });
  }
});


exports.down = function(knex) {
  return knex.schema.dropTable('user')
};
