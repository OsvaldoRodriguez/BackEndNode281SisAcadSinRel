'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auditoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Auditoria.init({
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tabla: {
    type: DataTypes.STRING,
    allowNull: false
  },
  accion: {
    type: DataTypes.ENUM('agregar', 'actualizar', 'eliminar'),
    allowNull: false
  },
  datos: {
    type: DataTypes.JSON,
    allowNull: false
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
  }, {
    sequelize,
    modelName: 'Auditoria',
  });
  return Auditoria;
};