const express = require('express');

const db = require('../data/helpers/recipeBookDb');

const router = express.Router();

router.get('/', (req, res) => {
  db.get('dishes')
    .then(dishes => res.status(200).json(dishes))
    .catch(err => res.status(500).json({errorMessage: 'Could not retrieve list of dishes at this time', error: err}));
})

module.exports = router;