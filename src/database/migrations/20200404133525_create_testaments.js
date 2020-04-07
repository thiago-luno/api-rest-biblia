
exports.up = function(knex) {
  return knex.schema.createTable('testaments', function(table) {
    table.increments();
    table.integer('bookId').notNullable(),
    table.integer('verse').notNullable();
    table.string('NVI').notNullable();
    table.integer('chapter').notNullable();
    table.string('bookName').notNullable();
    table.string('bookCode').notNullable();
    table.string('bookTestament').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('testaments')
};
