'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'session_id', {
      type: Sequelize.STRING,
      allowNull: true, // Modify allowNull based on your requirements
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'session_id');
  },
};
