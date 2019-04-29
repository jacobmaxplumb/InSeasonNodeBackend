'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      season: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      foodType: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      recipeId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Ingredients',
          key: 'id',
          as: 'recipeId',
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ingredients');
  }
};