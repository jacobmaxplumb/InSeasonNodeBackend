'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    protien: {
      type: DataTypes.STRING,
      allowNull: false
    },
    season: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    }
  });

  Recipe.associate = function(models) {
    Recipe.hasMany(models.Ingredient, {
      foreignKey: 'ingredientId',
      as: 'ingredients',
    })
  };

  return Recipe;
};