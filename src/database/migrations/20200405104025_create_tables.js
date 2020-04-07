const bibles = [
  {cod:'acf', name:"Almeida Corrigida Fiel", language:'pt-br'},
  {cod:'aa', name:"Almeida Revisada Imprensa Bíblica", language:'pt-br'},
  {cod:'ara', name:"Almeida Revista e Atualizada", language:'pt-br'},
  {cod:'arc', name:"Almeida Revista e Corrigida", language:'pt-br'},
  {cod:'rc69', name:"Almeida Revista e Corrigida 1969", language:'pt-br'},
  {cod:'naa', name:"Nova Almeida Atualizada", language:'pt-br'},
  {cod:'nvi', name:"Nova Versão Internacional", language:'pt-br'},
  {cod:'nvt', name:"Nova Versão Transformadora", language:'pt-br'},
  {cod:'ol', name:"O Livro", language:'pt-br'},
  {cod:'tb', name:"Sociedade Bíblica Britânica", language:'pt-br'},
  {cod:'vc', name:"Versão Católica", language:'pt-br'},
  {cod:'sev', name:"Las Sagradas Escrituras", language:'es'},
  {cod:'rv', name:"Reina Valera", language:'es'},
]


exports.up = function(knex) {

  return  knex.schema
    .createTable('aa', function(table) {
      table.increments();
      table.integer('bookId').notNullable(),
      table.integer('verse').notNullable();
      table.string('aa').notNullable();
      table.integer('chapter').notNullable();
      table.string('bookName').notNullable();
      table.string('bookCode').notNullable();
      table.string('bookTestament').notNullable();
    })

    .createTable('ara', function(table) {
      table.increments();
      table.integer('bookId').notNullable(),
      table.integer('verse').notNullable();
      table.string('ara').notNullable();
      table.integer('chapter').notNullable();
      table.string('bookName').notNullable();
      table.string('bookCode').notNullable();
      table.string('bookTestament').notNullable();
    })

    .createTable('arc', function(table) {
      table.increments();
      table.integer('bookId').notNullable(),
      table.integer('verse').notNullable();
      table.string('arc').notNullable();
      table.integer('chapter').notNullable();
      table.string('bookName').notNullable();
      table.string('bookCode').notNullable();
      table.string('bookTestament').notNullable();
    })

    .createTable('rc69', function(table) {
      table.increments();
      table.integer('bookId').notNullable(),
      table.integer('verse').notNullable();
      table.string('rc69').notNullable();
      table.integer('chapter').notNullable();
      table.string('bookName').notNullable();
      table.string('bookCode').notNullable();
      table.string('bookTestament').notNullable();
    })

    .createTable('naa', function(table) {
      table.increments();
      table.integer('bookId').notNullable(),
      table.integer('verse').notNullable();
      table.string('naa').notNullable();
      table.integer('chapter').notNullable();
      table.string('bookName').notNullable();
      table.string('bookCode').notNullable();
      table.string('bookTestament').notNullable();
    })

    .createTable('ol', function(table) {
      table.increments();
      table.integer('bookId').notNullable(),
      table.integer('verse').notNullable();
      table.string('ol').notNullable();
      table.integer('chapter').notNullable();
      table.string('bookName').notNullable();
      table.string('bookCode').notNullable();
      table.string('bookTestament').notNullable();
    })

    .createTable('tb', function(table) {
      table.increments();
      table.integer('bookId').notNullable(),
      table.integer('verse').notNullable();
      table.string('tb').notNullable();
      table.integer('chapter').notNullable();
      table.string('bookName').notNullable();
      table.string('bookCode').notNullable();
      table.string('bookTestament').notNullable();
    })

    .createTable('vc', function(table) {
      table.increments();
      table.integer('bookId').notNullable(),
      table.integer('verse').notNullable();
      table.string('vc').notNullable();
      table.integer('chapter').notNullable();
      table.string('bookName').notNullable();
      table.string('bookCode').notNullable();
      table.string('bookTestament').notNullable();
    })

    .createTable('sev', function(table) {
      table.increments();
      table.integer('bookId').notNullable(),
      table.integer('verse').notNullable();
      table.string('sev').notNullable();
      table.integer('chapter').notNullable();
      table.string('bookName').notNullable();
      table.string('bookCode').notNullable();
      table.string('bookTestament').notNullable();
    })

    .createTable('rv', function(table) {
      table.increments();
      table.integer('bookId').notNullable(),
      table.integer('verse').notNullable();
      table.string('rv').notNullable();
      table.integer('chapter').notNullable();
      table.string('bookName').notNullable();
      table.string('bookCode').notNullable();
      table.string('bookTestament').notNullable();
    })
} 

exports.down = function(knex) {
 
  knex.schema.dropTable('aa')
  knex.schema.dropTable('ara')
  knex.schema.dropTable('arc')
  knex.schema.dropTable('rc69')
  knex.schema.dropTable('naa')
  knex.schema.dropTable('ol')
  knex.schema.dropTable('tb')
  knex.schema.dropTable('vc')
  knex.schema.dropTable('sev')
  knex.schema.dropTable('rv')
};
