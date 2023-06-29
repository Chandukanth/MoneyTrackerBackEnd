'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('reports', 'amount');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('reports', 'amount', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
