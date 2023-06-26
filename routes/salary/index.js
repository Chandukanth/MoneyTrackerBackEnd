const express = require('express');
const app = express.Router();
const create = require("./create")
const get = require("./get")

// Define the route
app.post('/create', create);
app.get('/:userId', get);

module.exports = app;
