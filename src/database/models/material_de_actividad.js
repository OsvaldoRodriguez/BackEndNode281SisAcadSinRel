'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material_De_Actividad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Material_De_Actividad.init({
    nombre_archivo: DataTypes.STRING,
    tipo_archivo: DataTypes.STRING,
    prioridad: DataTypes.INTEGER,
    ExpositorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Material_De_Actividad',
  });
  return Material_De_Actividad;
};