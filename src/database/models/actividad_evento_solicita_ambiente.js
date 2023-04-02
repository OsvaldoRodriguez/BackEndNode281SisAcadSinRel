'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actividad_Evento_Solicita_Ambiente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Actividad_Evento_Solicita_Ambiente.init({
    Actividad_EventoId: DataTypes.INTEGER,
    AmbienteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Actividad_Evento_Solicita_Ambiente',
  });
  return Actividad_Evento_Solicita_Ambiente;
};