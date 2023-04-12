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

      models.Actividad_Evento.hasMany(models.Foto, {
        foreignKey: 'Actividad_EventoId'
      })

      models.Actividad_Evento.belongsTo(models.Categoria, {
        foreignKey: 'CategoriaId'
      })

      models.Actividad_Evento.hasMany(models.Certificado, {
        foreignKey : 'Actividad_EventoId'
      })

      models.Actividad_Evento.belongsTo(models.Evento, {
        foreignKey : 'EventoId'
      })

      models.Actividad_Evento.belongsToMany(models.Ambiente, {
        through : models.Actividad_Evento_Solicita_Ambiente, foreignKey : 'Actividad_EventoId'
      }) 

      models.Actividad_Evento.belongsToMany(models.Expositor, {
        through : models.Actividad_Evento_Has_Expositor, foreignKey : 'Actividad_EventoId'
      }) 

      models.Actividad_Evento.belongsToMany(models.Usuario, {
        through : models.Usuario_Comenta_Actividad_Evento, foreignKey : 'Actividad_EventoId'
      })

      models.Actividad_Evento.belongsToMany(models.Usuario, {
        through : models.Usuario_Asiste_Actividad_Evento, foreignKey : 'Actividad_EventoId'
      })


      
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