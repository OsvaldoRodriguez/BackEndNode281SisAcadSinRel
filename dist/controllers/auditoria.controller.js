"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _models = _interopRequireDefault(require("./../database/models"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  async mostrar(req, res) {
    try {
      const data = await _models.default.Auditoria.findAll({});
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        mensaje: "Error al listar"
      });
    }
  },
  async mostrarConPersonaYBol(req, res) {
    try {
      const data = await _models.default.Usuario.findAll({
        include: {
          model: _models.default.Persona
        }
      });
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        mensaje: "Error al listar"
      });
    }
  },
  async guardar(req, res) {
    try {
      // cuando es peticion post es body se guarda los datos
      const data = await _models.default.Usuario.create(req.body);
      res.status(200).json({
        mensaje: "Todo Okey",
        body: data
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        mensaje: "Error al Crear dato"
      });
    }
  },
  async mostrarId(req, res) {
    // cuando es por parametros -> el valor esta en params
    let ID = req.params.id;
    console.log(ID);
    try {
      const data = await _models.default.Usuario.findAll({
        where: {
          id: ID
        },
        include: [{
          model: _models.default.Rol
        }, {
          model: _models.default.Persona
        }]
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        mensaje: "Error al listar por iD"
      });
    }
  },
  async actualizar(req, res) {
    let ID = req.params.id; // cuando es por parametros en params esta
    console.log("llega id", ID);
    try {
      console.log(req.body);
      const hash = await _bcrypt.default.hash(req.body.contrasenia, 12);
      console.log("hast de pasww", hash);
      const data = await _models.default.Usuario.update({
        nom_usuario: req.body.nom_usuario,
        contrasenia: hash,
        correo: res.body.correo
      }, {
        where: {
          id: ID
        }
      });
      res.status(200).json({
        mensaje: "Actualizado Correctamente",
        body: data
      });
    } catch (error) {
      res.status(500).json({
        mensaje: "Error  al Actualizar"
      });
    }
  },
  async eliminar(req, res) {
    let ID = req.params.id; // cuando es /persona/1 (con parametros) el parametro  esta en params
    try {
      const data = await _models.default.Usuario.destroy({
        where: {
          id: ID
        }
      });
      res.status(200).json({
        mensaje: "Eliminado Correctamente",
        body: data
      });
    } catch (error) {
      res.status(500).json({
        mensaje: "Error al eliminar"
      });
    }
  },
  async actualizarImagen(req, res) {
    // capturando la imagen
    let ID = req.params.id;
    let datos = {}; // datos para actualizar
    if (req.file) {
      datos.foto = req.file.filename;
    }
    console.log("lo que esta lelgando ", datos);
    console.log("id", ID);
    try {
      await _models.default.Usuario.update(datos, {
        where: {
          id: ID
        }
      });
      res.status(200).json({
        mensaje: "Foto actualizada"
      });
    } catch (error) {
      res.status(401).json(error);
    }
  }
};
exports.default = _default;