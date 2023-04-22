import models from "../database/models";
export default {
  async mostrar(req, res) {
    try {
      const data = await models.InformacionSistema.findAll({
      });
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensaje: "Error al listar" });
    }
  },
  async guardar(req, res) {
    try {
      const IDDAta = 1;
      const buscando = await models.InformacionSistema.findOne({
        where : {
          id : IDDAta
        }
      })
      if(buscando ){
        console.log("encuentra")
        const data = await models.InformacionSistema.update(req.body, {
          where : {
            id : IDDAta
          }
        })
        
        res.status(200).json(data);
      }else{
        console.log("no encuentra");
        const data = await models.InformacionSistema.create(req.body);
        res.status(200).json(data);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensaje: "Error al listar" });
    }
  },

  async mostrarId(req, res) {
    // cuando es por parametros -> el valor esta en params
    let ID = req.params.id;
    // console.log(ID);
    try {
      const data = await models.InformacionSistema.findAll({
        where: {
          id: ID,
        },
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al listar por iD" });
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
      await models.InformacionSistema.update(datos, {
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
