const express = require('express');

const db = require('../data/helpers/recipeBookDb');

const router = express.Router();

const table = 'recipes';

router.get('/', (req, res) => {
  db.get(table)
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.status(500).json({errorMessage: 'Could not retrieve the list of recipes at this time', error: err}));
})

module.exports = router;