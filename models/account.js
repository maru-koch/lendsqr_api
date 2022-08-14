knex.schema.hasTable('accounts').then(function(exists) {
    // a schema to create the user table if it does not exist
  if (!exists) {
    return knex.schema.createTable('accounts', function(table) {
      table.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
      table.integer('accountNumber').unique({indexName:'user_unique_id', deferrable:'immediate'})
      table.enu('accountType', ['current','savings']);
      table.uuid('user_id').references('id').inTable('users').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  }
});