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
      const data = await _models.default.Evento.findAll({
        include: {
          model: _models.default.Institucion
        }
      });

      // haciendo backup

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
      const data = await _models.default.Evento.create(req.body);
      const auditoria = JSON.stringify(data.toJSON());
      let datitos = {
        usuario: req.body.user,
        accion: "agregar",
        tabla: _models.default.Evento.name,
        datos: auditoria
      };
      await _models.default.Auditoria.create(datitos);
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
      const data = await _models.default.Evento.findAll({
        include: [{
          model: _models.default.Institucion
        }],
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
  async actualizar(req, res) {
    let ID = req.params.id; // cuando es por parametros en params esta
    var USUARIO = req.body.user;
    // console.log("datos ini", req.body);
    delete req.body.user;
    // console.log("datos fin", req.body);

    try {
      const registro = await _models.default.Evento.findByPk(ID);
      console.log("registro en", registro);
      if (!registro) {
        return res.status(404).json({
          error: "El registro no existe"
        });
      }
      const datosAnteriores = JSON.stringify(registro.toJSON());
      await registro.update(req.body);
      const datosNuevos = JSON.stringify(registro.toJSON());
      let datitos = {
        usuario: USUARIO,
        accion: "actualizar",
        tabla: _models.default.Evento.name,
        datos: `${datosAnteriores} -> ${datosNuevos}`
      };
      await _models.default.Auditoria.create(datitos);
      res.status(200).json(registro);
    } catch (error) {
      res.status(500).json({
        mensaje: "Error  al Actualizar"
      });
    }
  },
  async eliminar(req, res) {
    console.log("para eliminar");
    console.log(req.body);
    let USUARIO = req.body.user;
    let ID = req.params.id; // cuando es /persona/1 (con parametros) el parametro  esta en params
    try {
      const registro = await _models.default.Evento.findByPk(ID);
      if (!registro) {
        return res.status(404).json({
          error: "El registro no existe"
        });
      }
      const datos = JSON.stringify(registro.toJSON());
      await registro.destroy();
      let datitos = {
        usuario: USUARIO,
        accion: "eliminar",
        tabla: _models.default.Evento.name,
        datos: datos
      };
      await _models.default.Auditoria.create(datitos);
      res.status(200).json({
        mensaje: 'eliminado'
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
      datos.logo = req.file.filename;
    }
    try {
      await _models.default.Evento.update(datos, {
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