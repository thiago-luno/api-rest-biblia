const express = require('express');

const routes = express.Router();

const VerseController = require('./controllers/VerseController');
const AuthorsController = require('./controllers/AuthorController');
const VersionController = require('./controllers/VersionController');

routes.get('/', async (request, response)  =>  {
  response.json({ola:'ola'})
})  

routes.get('/authors', AuthorsController.index);
routes.get('/authors/:id', AuthorsController.findbyId);
routes.post('/authors', AuthorsController.create);

routes.get('/versions', VersionController.index);

routes.get('/verses/:version/:id/:chapter', VerseController.getChapter);


module.exports = routes;