knex.schema.hasTable('users').then(function(exists) {
    // a schema to create the user table if it does not exist
  if (!exists) {
    return knex.schema.createTable('accounts', function(table) {
      table.increments('accountId').primary();
      table.integer('accountNumber').unique({indexName:'user_unique_id', deferrable:'immediate'})
      table.enu('accountType', ['current','savings']);
      table.string('user')
      table.timestamp('created_at').defaultTo(knex.fn.now());

      table.foreign('user').references('userId').inTable('users');
    });
  }
});