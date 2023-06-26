const express = require('express');
const dotenv = require('dotenv');
const user = require("./routes/user/index")
const sequelize = require('./database/connection');

const app = express();
dotenv.config();

app.use(express.json());

app.use('/user/v1', user);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database');
    app.listen(8000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
