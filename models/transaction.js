knex.schema.hasTable('transactions').then(function(exists) {
    // a schema to create the transaction table if it does not exist
  if (!exists) {
    return knex.schema.createTable('transactions', function(table) {
      table.increments('transactionId').primary();
      table.string('user').unsigned().notNullable();
      table.string('account').unsigned().notNullable();
      table.string('transactionType');
      table.bigint('amount');
      table.timestamp('created_at').defaultTo(knex.fn.now());

      table.foreign('user').references('userId').inTable('users');
      table.foreign('account').references('accountId').inTable('accounts');
    });
  }
});