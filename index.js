const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
var knexLogger = require('knex-logger');

const db = require('./data/dbConfig');

const server = express();

const dishesRouter = require('./dishes/dishesRouter');
const recipesRouter = require('./recipes/recipesRouter');

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(knexLogger(db));
server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipesRouter);

const port = process.env.PORT || 8000;

server.listen(port, _ => console.log(`\nServer running on port ${port}\n`))