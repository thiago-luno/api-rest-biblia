exports.up = function(knex) {
  return knex.schema.createTable('authors', function(table) {
    table.integer('id').notNullable(),
    table.string('book').notNullable();
    table.string('cod').notNullable();
    table.integer('chapters').notNullable();
    table.string('testament').notNullable();
  })
  
};

exports.down = function(knex) {
  // return knex.schema.dropTable('authors')
};