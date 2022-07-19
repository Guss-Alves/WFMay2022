const JokesController = require('../controllers/jokes.controller');

module.exports = (app)=>{
    app.get('/api/jokes', JokesController.showAllJokes),
    app.get('/api/jokes/:_id', JokesController.getById),

    app.post('/api/jokes/new', JokesController.createJoke),

    app.put('/api/jokes/update/:_id', JokesController.updateJoke),

    app.delete('/api/jokes/delete/:_id', JokesController.deleteJoke)
}