import models from "../database/models";
export default {
  async mostrar(req, res) {
    try {
      const data = await models.Actividad_Evento.findAll({
        include: {
          model: models.Usuario,
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
      // console.log("lleega a guarda la activaidadslkdfjsldkj ", req.body);
      // cuando es peticion post es body se guarda los datos
      const data = await models.Actividad_Evento.create(req.body);

      // recuperando
      await data.reload();
      // console.log("datos recuperados", data.dataValues);
      await models.Actividad_Evento_Has_Expositor.create({
        ExpositorId: req.body.ExpositorId,
        Actividad_EventoId: data.dataValues.id,
      });

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
      const data = await models.Actividad_Evento.findAll({
        include: [
          { model: models.Categoria },
          { model: models.Ambiente },
          { model: models.Expositor },
        ],
        where: {
          EventoId: ID,
        },
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al listar por iD" });
    }
  },

  async actualizar(req, res) {
    const nuevos_datos = {
      nombre: req.body.nombre,
      fecha: req.body.fecha,
      horario_ini: req.body.horario_ini,
      horario_fin: req.body.horario_fin,
      CategoriaId: req.body.CategoriaId,
      EventoId: req.body.EventoId,
    };
    console.log("llegando datos", req.body);
    let ID = req.params.id; // cuando es por parametros en params esta
    try {
      const data = await models.Actividad_Evento.update(nuevos_datos, {
        where: {
          id: ID,
        },
      });

      // console.log("datos recuperados", data.dataValues);
      await models.Actividad_Evento_Has_Expositor.update(
        {
          ExpositorId: req.body.ExpositorId,
        },
        {
          where: {
            Actividad_EventoId: ID,
          },
        }
      );
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
      const data = await models.Actividad_Evento.destroy({
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
