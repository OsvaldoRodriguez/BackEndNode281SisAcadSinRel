'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario_Tiene_Rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario_Tiene_Rol.init({
    RolId: DataTypes.INTEGER,
    UsuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario_Tiene_Rol'
  });
  return Usuario_Tiene_Rol;
};