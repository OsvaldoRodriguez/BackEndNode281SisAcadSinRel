'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // se indica la llave foranea que ira de Usuario a Persona -> "PersonaId"
      models.Usuario.belongsTo(models.Persona, {
        foreignKey: 'PersonaId'
      })

      models.Usuario.hasOne(models.Expositor, {
        foreignKey : 'UsuarioId'
      })

      models.Usuario.hasMany(models.Certificado, {
        foreignKey : 'UsuarioId'
      })

      // el mismo caso, se indica el nombre de la llave foranea que ira  de Usuario a Rol -> UsuarioId
      models.Usuario.belongsToMany(models.Rol, {
        through : models.Usuario_Tiene_Rol, foreignKey : 'UsuarioId'
      }) 

      models.Usuario.belongsToMany(models.Evento, {
        through : models.Usuario_Se_Inscribe_Evento, foreignKey : 'UsuarioId'
      })

      models.Usuario.belongsToMany(models.Evento, {
        through : models.Usuario_Califica_Evento, foreignKey : 'UsuarioId'
      })

      models.Usuario.belongsToMany(models.Evento, {
        through : models.Usuario_Reserva_Participacion_Evento, foreignKey : 'UsuarioId'
      })

      models.Usuario.belongsToMany(models.Evento, {
        through : models.Usuario_Comenta_Evento, foreignKey : 'UsuarioId'
      })

      models.Usuario.belongsToMany(models.Actividad_Evento, {
        through : models.Usuario_Comenta_Actividad_Evento, foreignKey : 'UsuarioId'
      })

      models.Usuario.belongsToMany(models.Actividad_Evento, {
        through : models.Usuario_Asiste_Actividad_Evento, foreignKey : 'UsuarioId'
      })

    }
  }
  Usuario.init({
    nom_usuario: DataTypes.STRING,
    contrasenia: DataTypes.STRING,
    correo: DataTypes.STRING,
    foto: DataTypes.STRING,
    tipoFoto: DataTypes.STRING,
    pin : DataTypes.INTEGER,
    PersonaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};