// importando modelos
import models from "../database/models";
// para encriptar las contraseñas
import bcrypt from "bcrypt";
// para el token
import jwt from "jsonwebtoken";

export default {
  async login(req, res) {
    const { nom_usuario, contrasenia } = req.body;

    // console.log(req.body);
    let usuario = await models.Usuario.findOne({
      where: {
        nom_usuario: nom_usuario,
      },
    });
    // si no existe el usuario
    if (!usuario) {
      return res.status(401).json({ mensaje: "El usuario no existe" });
    }

    // verificar contraseña
    let correcto = await bcrypt.compare(contrasenia, usuario.contrasenia);

    if (!correcto)
      return res.status(401).json({ mensaje: "La contraseña es incorrecta" });
    // contraseña correcta
    // generando token
    let payload = {
      id: usuario.id,
      nom_usuario: usuario.nom_usuario,
      contrasenia: usuario.contrasenia,
      correo: usuario.correo,
      time: new Date(),
    };
    const token = jwt.sign(payload, "MI_CODIGO_SECRETO", {
      expiresIn: 20,
    });

    return res.status(200).json({
      mensaje: "Todo OK",
      access_token: token,
      usuario: usuario,
      error: false,
    });
  },

  async register(req, res) {
    const { nombre, paterno, materno, nom_usuario, contrasenia, correo} = req.body;
    if (nom_usuario) {
      // verificando si ya existe ese usuario
      let usuario = await models.Usuario.findOne({
        where: { nom_usuario: nom_usuario },
      });

      if (!usuario) {
        // cifrar password

        const hash = await bcrypt.hash(contrasenia, 12);
        await models.Persona.create({nombre, paterno, materno});

        const PersonaCreada = await models.Persona.findAll({
          where : {
            nombre : nombre, paterno : paterno, materno : materno
          }
        });

        let iD = PersonaCreada[0].id

        await models.Usuario.create({nom_usuario : nom_usuario, contrasenia : hash, correo : correo, PersonaId : iD});
        return res
          .status(201)
          .json({ mensaje: "Usuario Registrado Correctamente" });
      } else {
        return res
          .status(422)
          .json({ mensaje: `El usuario ${nom_usuario} ya existe` });
      }
    } else {
      res.status(422).json({ mensaje: "El Usuario es Obligatorio" });
    }
  },
  async perfil(req, res) {
    return res.status(200).json({ mensaje : "Ok", user : req.nom_usuario});
    
  },
  async logout(req, res) {},
};
