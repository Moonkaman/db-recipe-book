const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());

const port = process.env.PORT || 8000;

server.listen(port, _ => console.log(`\nServer running on port ${port}\n`))