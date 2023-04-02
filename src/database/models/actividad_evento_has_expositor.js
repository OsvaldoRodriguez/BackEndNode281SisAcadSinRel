'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actividad_Evento_Has_Expositor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Actividad_Evento_Has_Expositor.init({
    Actividad_EventoId: DataTypes.INTEGER,
    ExpositorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Actividad_Evento_Has_Expositor',
  });
  return Actividad_Evento_Has_Expositor;
};