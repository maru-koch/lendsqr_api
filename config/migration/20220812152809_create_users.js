/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema.createTable('users', function(table) {
      table.uuid('id').primary().notNullable().defaultTo(knex.raw("(UUID())"));
      table.string('firstName').notNullable()
      table.string('lastName').notNullable()
      table.string('email').notNullable().unique()
      table.string('phone')
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
