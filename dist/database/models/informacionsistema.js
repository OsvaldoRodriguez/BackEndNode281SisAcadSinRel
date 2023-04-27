'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InformacionSistema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InformacionSistema.init({
    logo: DataTypes.STRING,
    quienes_somos: DataTypes.STRING,
    mision: DataTypes.STRING,
    vision: DataTypes.STRING,
    celular: DataTypes.STRING,
    correo: DataTypes.STRING,
    direccion: DataTypes.STRING,
    facebook: DataTypes.STRING,
    twitter: DataTypes.STRING,
    instagram: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'InformacionSistema'
  });
  return InformacionSistema;
};