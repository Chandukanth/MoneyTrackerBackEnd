const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Salary = sequelize.define('salaries', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  salary: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pg_amount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  recharge_amount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Salary;
