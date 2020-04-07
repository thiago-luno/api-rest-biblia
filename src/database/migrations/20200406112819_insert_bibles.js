const bibles = [
  {cod:'acf', name:"Almeida Corrigida Fiel", language:'pt-BR'},
  {cod:'aa', name:"Almeida Revisada Imprensa Bíblica", language:'pt-BR'},
  {cod:'ara', name:"Almeida Revista e Atualizada", language:'pt-BR'},
  {cod:'arc', name:"Almeida Revista e Corrigida", language:'pt-BR'},
  {cod:'rc69', name:"Almeida Revista e Corrigida 1969", language:'pt-BR'},
  {cod:'naa', name:"Nova Almeida Atualizada", language:'pt-BR'},
  {cod:'nvi', name:"Nova Versão Internacional", language:'pt-BR'},
  {cod:'nvt', name:"Nova Versão Transformadora", language:'pt-BR'},
  {cod:'ol', name:"O Livro", language:'pt-BR'},
  {cod:'tb', name:"Sociedade Bíblica Britânica", language:'pt-BR'},
  {cod:'vc', name:"Versão Católica", language:'pt-BR'},
  {cod:'sev', name:"Las Sagradas Escrituras", language:'es'},
  {cod:'rv', name:"Reina Valera", language:'es'},
  {cod:'akjv', name:"American King James Version", language:'en-US'},
]


const fieldsToInsert = bibles.map(bible => 
  ({ cod: bible.cod, name: bible.name, language: bible.language })); 

exports.up = function(knex) {
  return  knex('bibles').insert(fieldsToInsert)   
};

exports.down = function(knex) {
  return  knex('bibles').del()   
};
