'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Objetivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Objetivo.belongsTo(models.Evento, {
        foreignKey: 'EventoId'
      });
    }
  }
  Objetivo.init({
    descripcion: DataTypes.STRING,
    EventoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Objetivo'
  });
  return Objetivo;
};