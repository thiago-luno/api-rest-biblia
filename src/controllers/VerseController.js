const connection = require('../database/connection');

module.exports = {

  async getChapter (request, response) {

    const { version, id, chapter } = request.params;

    const verses = await connection(version)
      .select('*')
      .where('bookCode', id)
      .where('chapter', chapter)
        
    return response.json(verses);
  },

}