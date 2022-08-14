/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('accounts', function(table) {
      table.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
      table.integer('accountNumber').unique({indexName:'user_unique_id', deferrable:'immediate'})
      table.enu('accountType', ['current','savings']);
      table.uuid('user_id').references('id').inTable('users').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('accounts')
};
