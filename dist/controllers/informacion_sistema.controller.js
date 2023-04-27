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
      const data = await _models.default.InformacionSistema.findAll({});
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
      const IDDAta = 1;
      const buscando = await _models.default.InformacionSistema.findOne({
        where: {
          id: IDDAta
        }
      });
      if (buscando) {
        console.log("encuentra");
        const data = await _models.default.InformacionSistema.update(req.body, {
          where: {
            id: IDDAta
          }
        });
        res.status(200).json(data);
      } else {
        console.log("no encuentra");
        const data = await _models.default.InformacionSistema.create(req.body);
        res.status(200).json(data);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        mensaje: "Error al listar"
      });
    }
  },
  async mostrarId(req, res) {
    // cuando es por parametros -> el valor esta en params
    let ID = req.params.id;
    // console.log(ID);
    try {
      const data = await _models.default.InformacionSistema.findAll({
        where: {
          id: ID
        }
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        mensaje: "Error al listar por iD"
      });
    }
  },
  async actualizarImagen(req, res) {
    // capturando la imagen
    let ID = req.params.id;
    let datos = {}; // datos para actualizar
    if (req.file) {
      datos.logo = req.file.filename;
    }
    try {
      await _models.default.InformacionSistema.update(datos, {
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