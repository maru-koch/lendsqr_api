/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('transactions', function(table) {
      table.uuid('id').primary().defaultTo(knex.raw("(UUID())"));
      table.enu('transactionType', ['debit', 'credit']);
      table.bigint('amount');
      table.uuid('user_id').references('id').inTable('users');
      table.uuid('account_id').references('id').inTable('accounts');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('transactions')
};
