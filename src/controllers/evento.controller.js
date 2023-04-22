import models from "../database/models";
export default {
  async mostrar(req, res) {
    try {
      const data = await models.Evento.findAll({
        include: {
          model: models.Institucion,
        },
      });
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensaje: "Error al listar" });
    }
  },

  async guardar(req, res) {
    try {
      // cuando es peticion post es body se guarda los datos
      const data = await models.Evento.create(req.body);
      res.status(200).json({ mensaje: "Todo Okey", body: data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensaje: "Error al Crear dato" });
    }
  },
  async mostrarId(req, res) {
    // cuando es por parametros -> el valor esta en params
    let ID = req.params.id;
    console.log(ID);
    try {
      const data = await models.Evento.findAll({
        where: {
          id: ID,
        },
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al listar por iD" });
    }
  },
  async actualizar(req, res) {
    let ID = req.params.id; // cuando es por parametros en params esta
    try {
      const data = await models.Evento.update(req.body, {
        where: {
          id: ID,
        },
      });
      res
        .status(200)
        .json({ mensaje: "Actualizado Correctamente", body: data });
    } catch (error) {
      res.status(500).json({ mensaje: "Error  al Actualizar" });
    }
  },
  async eliminar(req, res) {
    let ID = req.params.id; // cuando es /persona/1 (con parametros) el parametro  esta en params
    try {
      const data = await models.Evento.destroy({
        where: {
          id: ID,
        },
      });
      res.status(200).json({ mensaje: "Eliminado Correctamente", body: data });
    } catch (error) {
      res.status(500).json({ mensaje: "Error al eliminar" });
    }
  },
  async actualizarImagen(req, res) {
    // capturando la imagen
    let ID = req.params.id;
    let datos = {} // datos para actualizar
    if(req.file){
      datos.logo = req.file.filename;
    }
    
    try {
      await models.Evento.update(datos, {
        where : {
          id : ID
        }
      })
      res.status(200).json({mensaje : "Foto actualizada"})
    } catch (error) {
      res.status(401).json(error);
    }


  },
};
