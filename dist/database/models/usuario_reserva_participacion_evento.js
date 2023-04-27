'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario_Reserva_Participacion_Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario_Reserva_Participacion_Evento.init({
    UsuarioId: DataTypes.INTEGER,
    EventoId: DataTypes.INTEGER,
    fecha_hora: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Usuario_Reserva_Participacion_Evento'
  });
  return Usuario_Reserva_Participacion_Evento;
};