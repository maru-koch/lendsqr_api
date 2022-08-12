/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
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
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('transactions');
};
