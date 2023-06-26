module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salaries', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      salary: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pg_amount: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      recharge_amount: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('salary');
  },
};
