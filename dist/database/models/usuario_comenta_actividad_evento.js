'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario_Comenta_Actividad_Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario_Comenta_Actividad_Evento.init({
    UsuarioId: DataTypes.INTEGER,
    Actividad_EventoId: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    fecha_hora: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Usuario_Comenta_Actividad_Evento'
  });
  return Usuario_Comenta_Actividad_Evento;
};