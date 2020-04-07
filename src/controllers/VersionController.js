const connection = require('../database/connection');

module.exports = {

  async index (request, response) {
    const versions = await connection('bibles')
      .select('*')

    return response.json(versions);
  }
}