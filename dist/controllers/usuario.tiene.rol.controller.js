"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _models = _interopRequireDefault(require("../database/models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  async mostrar(req, res) {
    try {
      const data = await _models.default.Usuario_Tiene_Rol.findAll({
        // include : {
        //   model : models.Expositor
        // }
      });
      res.status(200).json({
        mensaje: "Todo Okey",
        body: data
      });
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
      const data = await _models.default.Usuario_Tiene_Rol.create(req.body);
      res.status(200).json(data);
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
      const data = await _models.default.Usuario_Tiene_Rol.findAll({
        where: {
          id: ID
        }
      });
      res.status(200).json({
        mensaje: "Todo Okey",
        body: data
      });
    } catch (error) {
      res.status(500).json({
        mensaje: "Error al listar por iD"
      });
    }
  },
  async actualizar(req, res) {
    let ID = req.params.id; // cuando es por parametros en params esta
    try {
      const data = await _models.default.Usuario_Tiene_Rol.update(req.body, {
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
      const data = await _models.default.Usuario_Tiene_Rol.destroy({
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
  }
};
exports.default = _default;