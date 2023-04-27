"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _models = _interopRequireDefault(require("../database/models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  async mostrar(req, res) {
    // console.log(models.Usuario.rawAttributes);
    try {
      const data = await _models.default.Material_De_Actividad.findAll({
        // include: {
        //   // model: models.Usuario,
        //   // required: true
        // }
        // primaryKey: 'i.Material_De_Actividad'
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
      const data = await _models.default.Material_De_Actividad.create(req.body);
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
    // console.log(ID);
    // console.log("body", req)
    try {
      const data = await _models.default.Material_De_Actividad.findAll({
        where: {
          ExpositorId: ID
        }
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        mensaje: "Error al listar por iD"
      });
    }
  },
  async mostrarIdByExpositor(req, res) {
    // cuando es por parametros -> el valor esta en params
    let ID = req.params.id;
    // console.log(ID);
    // console.log("body", req.body)
    try {
      const data = await _models.default.Material_De_Actividad.findAll({
        where: {
          ExpositorId: ID,
          Actividad_EventoId: req.body.Actividad_EventoId
        }
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
    try {
      const data = await _models.default.Material_De_Actividad.update(req.body, {
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
    let ID = req.params.id; // cuando es .Material_De_Actividad/1 (con parametros) el parametro  esta en params
    // console.log(ID);
    try {
      // console.log("llegando a eliminar", req.body);
      const data = await _models.default.Material_De_Actividad.destroy({
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
    let datos = {
      ExpositorId: ID
    }; // datos para actualizar
    // let idActividad_Evento = res.
    if (req.file) {
      datos.nombre_archivo = req.file.filename;
    }
    Ac;
    try {
      await _models.default.Material_De_Actividad.create({
        nombre_archivo: datos.nombre_archivo,
        ExpositorId: ID,
        Actividad_EventoId: req.body.Actividad_EventoId
      }, {
        // where : {
        //   ExpositorId : ID
        // }
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