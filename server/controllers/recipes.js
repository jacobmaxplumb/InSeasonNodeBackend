const Recipe = require('../models').Recipe;

module.exports = {
    create(req, res) {
        return Recipe
            .create({
                name: req.body.name,
                protien: req.body.protien,
                season: req.body.season
            })
            .then(recipe => res.status(201).send(recipe))
            .catch(error => res.status(400).send(error));
    },
};