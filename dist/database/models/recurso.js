'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recurso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Recurso.belongsTo(models.Ambiente, {
        foreignKey: 'AmbienteId'
      });
    }
  }
  Recurso.init({
    tipo_recurso: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    AmbienteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recurso'
  });
  return Recurso;
};