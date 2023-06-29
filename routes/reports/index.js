const express = require('express');
const app = express.Router();
const create = require("./create")
const search = require("./search")

// Define the route
app.post('/create', create);
app.get('/search', search);

module.exports = app;
