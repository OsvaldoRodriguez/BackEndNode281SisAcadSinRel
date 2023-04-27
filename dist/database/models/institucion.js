'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Institucion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Institucion.hasMany(models.Evento, {
        foreignKey: "InstitucionId"
      });
      models.Institucion.hasMany(models.Ambiente, {
        foreignKey: 'InstitucionId'
      });
    }
  }
  Institucion.init({
    nombre_institucion: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    logo: DataTypes.STRING,
    celular: DataTypes.STRING,
    correo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Institucion'
  });
  return Institucion;
};