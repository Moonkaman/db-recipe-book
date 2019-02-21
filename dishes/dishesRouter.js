const express = require('express');

const db = require('../data/helpers/recipeBookDb');

const router = express.Router();

const table = 'dishes'

router.get('/', (req, res) => {
  db.get(table)
    .then(dishes => res.status(200).json(dishes))
    .catch(err => res.status(500).json({errorMessage: 'Could not retrieve list of dishes at this time', error: err}));
})

router.get('/:id', (req, res) => {
  db.getById(table, req.params.id)
    .then(dish => res.status(200).json(dish))
    .catch(err => res.status(500).json({errorMessage: 'Could not retrieve the dish at this time', error: err}));
})

router.post('/', (req, res) => {
  if(req.body.name && req.body.recipe_id){
    db.add(table, req.body)
      .then(newDish => res.status(200).json(newDish))
      .catch(err => res.status(500).json({errorMessage: 'Could not create a dish at this time', error: err}));
  } else {
    res.status(400).json({errorMessage: `Please provide a${req.body.name ? '' : ' name'}${!req.body.name && !req.body.recipe_id ? ' and a ' : ' ' }${req.body.recipe_id ? '' : 'valid recipe id ' }with your request`});
  }
})

module.exports = router;