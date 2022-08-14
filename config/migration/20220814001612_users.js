/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
      table.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
      table.string('firstName')
      table.string('lastName')
      table.string('email').notNullable()
      table.string('phone')
       table.string('password').notNullable()
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
