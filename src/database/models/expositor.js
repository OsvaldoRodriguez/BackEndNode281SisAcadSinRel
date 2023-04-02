'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expositor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Expositor.init({
    experiencia_academica: DataTypes.STRING,
    UsuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Expositor',
  });
  return Expositor;
};