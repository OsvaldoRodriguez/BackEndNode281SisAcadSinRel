import models from "../database/models";
export default {
  async mostrar(req, res) {
    // console.log(models.Usuario.rawAttributes);
    try {
      const data = await models.Expositor.findAll({
        include : {
          model : models.Usuario,
          include : {
            model : models.Persona
          }
        }
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
      const data = await models.Expositor.create(req.body);
      res.status(200).json(data);
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
      const data = await models.Expositor.findAll({
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
      const data = await models.Expositor.update(req.body, {
        where: {
          id: ID,
        },
      });
      res
        .status(200)
        .json(data);
    } catch (error) {
      res.status(500).json({ mensaje: "Error  al Actualizar" });
    }
  },

  async eliminar(req, res) {
    let ID = req.params.id; // cuando es /Expositor/1 (con parametros) el parametro  esta en params
    try {
      const data = await models.Expositor.destroy({
        where: {
          id: ID,
        },
      });

      res.status(200).json({ mensaje: "Eliminado Correctamente", body: data });
    } catch (error) {
      res.status(500).json({ mensaje: "Error al eliminar" });
    }
  },
};
