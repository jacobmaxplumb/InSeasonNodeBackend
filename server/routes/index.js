const usersController = require('../controllers').users;
const ingredientsController = require('../controllers').ingredients;
const recipesController = require('../controllers').recipes;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Api'
    }))

    // Users
    app.post('/api/users', usersController.create);
    app.get('/api/users', usersController.list);

    app.post('/api/ingredients', ingredientsController.create);

    app.post('/api/recipes', recipesController.create);
}