"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Evento.belongsTo(models.Institucion, {
        foreignKey: "InstitucionId",
      });

      models.Evento.hasMany(models.Objetivo, {
        foreignKey : 'EventoId'
      })

      models.Evento.hasMany(models.Certificado, {
        foreignKey : 'EventoId'
      })

      models.Evento.hasMany(models.Actividad_Evento, {
        foreignKey : 'EventoId'
      })

      
      models.Evento.belongsToMany(models.Usuario, {
        through : models.Usuario_Se_Inscribe_Evento, foreignKey : 'EventoId'
      })

      models.Evento.belongsToMany(models.Usuario, {
        through : models.Usuario_Califica_Evento, foreignKey : 'EventoId'
      })

      models.Evento.belongsToMany(models.Usuario, {
        through : models.Usuario_Reserva_Participacion_Evento, foreignKey : 'EventoId'
      })

      
      models.Evento.belongsToMany(models.Usuario, {
        through : models.Usuario_Comenta_Evento, foreignKey : 'EventoId'
      })

    }
  }
  Evento.init(
    {
      nombre_Evento: DataTypes.STRING,
      fecha_ini: DataTypes.DATE,
      fecha_fin: DataTypes.DATE,
      logo: DataTypes.STRING,
      InstitucionId: DataTypes.INTEGER,
      descripcion : DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Evento",
    }
  );
  return Evento;
};
