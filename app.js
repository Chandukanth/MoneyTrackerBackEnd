const express = require('express');
const dotenv = require('dotenv');
const user = require("./routes/user/index")
const salary = require("./routes/salary/index")
const reports = require("./routes/reports/index")
const sequelize = require('./database/connection');

const app = express();
dotenv.config();

app.use(express.json());

app.use('/user/v1', user);
app.use('/v1/salary', salary)
app.use("/v1/report", reports)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database');
    app.listen(8000, () => {
      console.log('MoneyTracker API Service listening on port 8000 in development mode');
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
