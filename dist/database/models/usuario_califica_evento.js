'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario_Califica_Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario_Califica_Evento.init({
    UsuarioId: DataTypes.INTEGER,
    EventoId: DataTypes.INTEGER,
    puntuacion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario_Califica_Evento'
  });
  return Usuario_Califica_Evento;
};