'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Evento.init({
    nombre_Evento: DataTypes.STRING,
    fecha_ini: DataTypes.DATE,
    fecha_fin: DataTypes.DATE,
    logo: DataTypes.STRING,
    InstitucionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Evento',
  });
  return Evento;
};