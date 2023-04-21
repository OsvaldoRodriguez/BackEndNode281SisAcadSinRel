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

  
};
