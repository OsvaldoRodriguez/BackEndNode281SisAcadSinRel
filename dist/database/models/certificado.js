'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Certificado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Certificado.belongsTo(models.Usuario, {
        foreignKey: 'UsuarioId'
      });
      models.Certificado.belongsTo(models.Evento, {
        foreignKey: 'EventoId'
      });
      models.Certificado.belongsTo(models.Actividad_Evento, {
        foreignKey: 'Actividad_EventoId'
      });
    }
  }
  Certificado.init({
    titulo: DataTypes.STRING,
    fecha_entrega: DataTypes.DATE,
    carga_horaria: DataTypes.INTEGER,
    UsuarioId: DataTypes.INTEGER,
    EventoId: DataTypes.INTEGER,
    Actividad_EventoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Certificado'
  });
  return Certificado;
};