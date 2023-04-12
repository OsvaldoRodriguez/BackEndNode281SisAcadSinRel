'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ambiente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Ambiente.belongsTo(models.Institucion, {
        foreignKey : 'InstitucionId'
      })

      models.Ambiente.hasMany(models.Recurso, {
        foreignKey : 'AmbienteId'
      })

      models.Ambiente.hasMany(models.Foto, {
        foreignKey : 'AmbienteId'
      })

      models.Ambiente.belongsToMany(models.Actividad_Evento, {
        through : models.Actividad_Evento_Solicita_Ambiente, foreignKey : 'AmbienteId'
      }) 
    }
  }
  Ambiente.init({
    tipo_ambiente: DataTypes.STRING,
    area_ambiente: DataTypes.DECIMAL,
    direccion_ambiente: DataTypes.STRING,
    estado: DataTypes.STRING,
    InstitucionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ambiente',
  });
  return Ambiente;
};