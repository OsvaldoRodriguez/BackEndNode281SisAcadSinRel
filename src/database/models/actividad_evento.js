'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actividad_Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Actividad_Evento.init({
    fecha: DataTypes.DATE,
    horario: DataTypes.TIME,
    nombre: DataTypes.STRING,
    CategoriaId: DataTypes.INTEGER,
    EventoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Actividad_Evento',
  });
  return Actividad_Evento;
};