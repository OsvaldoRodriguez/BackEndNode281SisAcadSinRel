'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    nom_usuario: DataTypes.STRING,
    contrasenia: DataTypes.STRING,
    correo: DataTypes.STRING,
    foto: DataTypes.STRING,
    tipoFoto: DataTypes.STRING,
    PersonaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};