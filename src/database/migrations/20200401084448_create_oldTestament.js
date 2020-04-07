exports.up = function(knex) {
  return knex.schema.createTable('oldTestament', function(table) {
    table.increments();
    table.integer('bookId').notNullable(),
    table.integer('verse').notNullable();
    table.string('text').notNullable();
    table.integer('chapter').notNullable();
    table.string('bookName').notNullable();
    table.string('bookCode').notNullable();
    table.string('bookTestament').notNullable();
  })
};

exports.down = function(knex) {
  // return knex.schema.dropTable('newTestament')
};