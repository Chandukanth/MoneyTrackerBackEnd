const express = require('express');
const app = express.Router();
const signup = require("./signup")
const login = require("./login")

// Define the route
app.post('/signup', signup);
app.post('/login', login);

module.exports = app;
