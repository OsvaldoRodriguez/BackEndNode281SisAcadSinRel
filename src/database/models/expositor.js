'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expositor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      
      // ******************************************************************
      // para que funcniones expositor
      // models.Expositor.hasMany(models.Material_De_Actividad, {
      //   foreignKey: 'ExpositorId'
      // })
      // ******************************************************************

      models.Expositor.belongsTo(models.Usuario, {
        foreignKey : 'UsuarioId'
      })

      models.Expositor.belongsToMany(models.Actividad_Evento, {
        through : models.Actividad_Evento_Has_Expositor, foreignKey : 'ExpositorId'
      }) 
    }
  }
  Expositor.init({
    experiencia_academica: DataTypes.STRING,
    UsuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Expositor',
  });
  return Expositor;
};