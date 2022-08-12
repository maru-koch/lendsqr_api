/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
      return knex.schema.createTable('accounts', function(table) {
      table.increments('accountId').primary();
      table.integer('accountNumber').unique({indexName:'user_unique_id', deferrable:'immediate'})
      table.enu('accountType', ['current','savings']);
      table.string('user')
      table.timestamp('created_at').defaultTo(knex.fn.now());

      table.foreign('user').references('userId').inTable('users');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('accounts');
};
