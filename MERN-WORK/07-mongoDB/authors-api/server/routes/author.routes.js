const AuthorController = require('../controllers/author.controller');

module.exports = (app)=>{
    app.get('/api/authors', AuthorController.showAllAuthors),
    app.get('/api/author/:id', AuthorController.showOneAuthor),
    app.post('/api/author/new', AuthorController.createAuthor),
    app.put('/api/author/edit/:id', AuthorController.updateAuthor),
    app.delete('/api/author/delete/:id', AuthorController.deleteAuthor)
}