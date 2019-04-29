const Ingredient = require('../models').Ingredient;

module.exports = {
    create(req, res) {
        return Ingredient
            .create({
                name: req.body.name,
                description: req.body.description,
                season: req.body.season,
                foodType: req.body.foodType
            })
            .then(ingredient => res.status(201).send(ingredient))
            .catch(error => res.status(400).send(error));
    },
};