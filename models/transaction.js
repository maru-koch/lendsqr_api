knex.schema.hasTable('transactions').then(function(exists) {
    // a schema to create the transaction table if it does not exist
  if (!exists) {
      return knex.schema.createTable('transactions', function(table) {
      table.uuid('id').primary();
      table.enu('transactionType', ['debit', 'credit']);
      table.bigint('amount');
      table.uuid('user_id').references('id').inTable('users');
      table.uuid('account_id').references('id').inTable('accounts');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  }
});