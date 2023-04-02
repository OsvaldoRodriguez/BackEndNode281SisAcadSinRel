'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ambiente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ambiente.init({
    tipo_ambiente: DataTypes.STRING,
    area_ambiente: DataTypes.DECIMAL,
    direccion_ambiente: DataTypes.STRING,
    estado: DataTypes.STRING,
    InstitucionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ambiente',
  });
  return Ambiente;
};