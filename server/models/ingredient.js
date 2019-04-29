'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    season: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    foodType: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  });

  Ingredient.associate = function(models) {
    Ingredient.belongsTo(models.Recipe, {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE',
    });
  };
  return Ingredient;
};