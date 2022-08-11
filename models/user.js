knex.schema.hasTable('users').then(function(exists) {
    // a schema to create the user table if it does not exist
  if (!exists) {
    return knex.schema.createTable('accounts', function(table) {
      table.increments('userID').primary();
      table.string('firstName')
      table.string('lastName')
      table.string('email')
      table.string('phone')
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  }
});