'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario_Asiste_Actividad_Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario_Asiste_Actividad_Evento.init({
    UsuarioId: DataTypes.INTEGER,
    Actividad_EventoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario_Asiste_Actividad_Evento',
  });
  return Usuario_Asiste_Actividad_Evento;
};