const express = require('express');

const db = require('../data/helpers/recipeBookDb');

const router = express.Router();

const table = 'recipes';

router.get('/', (req, res) => {
  db.get(table)
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json({errorMessage: 'Could not retrieve the list of recipes at this time', error: err}));
})

router.post('/', (req, res) => {
  if(req.body.name){
    db.add(table, req.body)
      .then(newRecipe => res.status(200).json(newRecipe))
      .catch(err => res.status(500).json({errorMessage: 'Could not create a recipe at this time', error: err}));
  } else {
    res.status(400).json({errorMessage: `Please provide a name with your request`});
  }
})

router.get('/:id', (req, res) => {
  db.getRecipeById(req.params.id)
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.status(500).json({errorMessage: 'Could not retrieve the recipe at this time', error: err}));
})

module.exports = router;