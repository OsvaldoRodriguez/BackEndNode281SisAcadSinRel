'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Foto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Foto.belongsTo(models.Actividad_Evento, {
        foreignKey: 'Actividad_EventoId'
      });
      models.Foto.belongsTo(models.Ambiente, {
        foreignKey: 'AmbienteId'
      });
    }
  }
  Foto.init({
    nombre: DataTypes.STRING,
    Actividad_EventoId: DataTypes.INTEGER,
    AmbienteId: DataTypes.INTEGER,
    tipoFoto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Foto'
  });
  return Foto;
};