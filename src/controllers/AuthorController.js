const connection = require('../database/connection');

module.exports = {

  async index(request, response) {
 
    const authors = await connection('authors')
      .select('*')

    return response.json(authors);
  },

  async findbyId(request, response) {

    const { id } = request.params;

    const author = await connection('authors')
      .where('cod', id)
      .select('*')
      .first()


    return response.json(author);
  },

  async create(request, response) {
    
    const { id, book, cod, chapters, testament} = request.body;

    await connection('authors').insert({
      id,
      book,
      cod,
      chapters,
      testament
    })

    return response.json({ id });
  }

}