"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _models = _interopRequireDefault(require("../database/models"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _sendEmail = _interopRequireDefault(require("./../controllers/send.email.controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// importando modelos
// para encriptar las contraseñas
// para el token
var _default = {
  async login(req, res) {
    const {
      nom_usuario,
      contrasenia
    } = req.body;
    let PIN = Math.floor(Math.random() * 9000) + 1000; // generando pin

    // console.log(req.body);
    let usuario = await _models.default.Usuario.findOne({
      where: {
        nom_usuario: nom_usuario
      }
    });
    // si no existe el usuario
    if (!usuario) {
      return res.status(401).json({
        mensaje: "El usuario no existe"
      });
    }

    // verificar contraseña
    let correcto = await _bcrypt.default.compare(contrasenia, usuario.contrasenia);
    if (!correcto) return res.status(401).json({
      mensaje: "La contraseña es incorrecta"
    });
    // contraseña correcta
    // generando token
    let payload = {
      id: usuario.id,
      nom_usuario: usuario.nom_usuario,
      correo: usuario.correo,
      time: new Date()
    };
    const token = _jsonwebtoken.default.sign(payload, "MI_CODIGO_SECRETO", {
      expiresIn: 360000000
    });

    // ahora se buscara el rol de ese usuario
    await _models.default.Usuario.update({
      pin: PIN
    }, {
      where: {
        id: usuario.id
      }
    });
    const user_rol = await _models.default.Usuario.findAll({
      where: {
        id: usuario.id
      },
      include: {
        model: _models.default.Rol
      }
    });

    // console.log("llando  rol", user_rol);
    // console.log(' mostrando solo rol', user_rol[0].Rols[0].descripcion)
    let lista_roles = [];
    for (let i = 0; i < user_rol[0].Rols.length; i++) {
      lista_roles.push(user_rol[0].Rols[i].descripcion);
    }
    // console.log("lista roles ", lista_roles);

    const datosCorreo = {
      email: usuario.correo,
      subject: "Bienvenido a Sistemas Academicos 1.0",
      text: `Usted acaba de iniciar sesión en SISTEMAS ACADEMICOS\n ${PIN} es su pin para poder loguearse de manera segura`
    };
    // enviando correo
    // await emailer.enviarCorreo(datosCorreo);

    return res.status(200).json({
      mensaje: "Todo OK",
      access_token: token,
      usuario: nom_usuario,
      email: usuario.correo,
      rol: lista_roles,
      error: false
    });
  },
  async register(req, res) {
    const {
      nombre,
      paterno,
      materno,
      nom_usuario,
      contrasenia,
      correo
    } = req.body;
    if (nom_usuario) {
      // verificando si ya existe ese usuario
      let usuario = await _models.default.Usuario.findOne({
        where: {
          nom_usuario: nom_usuario
        }
      });
      if (!usuario) {
        // cifrar password

        const hash = await _bcrypt.default.hash(contrasenia, 12);
        const PersonaCreada = await _models.default.Persona.create({
          nombre,
          paterno,
          materno
        });

        // const PersonaCreada = await models.Persona.findAll({
        //   where: {
        //     nombre: nombre,
        //     paterno: paterno,
        //     materno: materno,
        //   },
        // });
        await PersonaCreada.reload();

        // let iD = PersonaCreada[0].id;

        const UsuarioSave = await _models.default.Usuario.create({
          nom_usuario: nom_usuario,
          contrasenia: hash,
          correo: correo,
          PersonaId: PersonaCreada.id
        });
        UsuarioSave.reload();
        await _models.default.Usuario_Tiene_Rol.create({
          UsuarioId: UsuarioSave.id,
          RolId: 3
        });
        return res.status(201).json({
          mensaje: "Usuario Registrado Correctamente"
        });
      } else {
        return res.status(422).json({
          mensaje: `El usuario ${nom_usuario} ya existe`
        });
      }
    } else {
      res.status(422).json({
        mensaje: "El Usuario es Obligatorio"
      });
    }
  },
  async register_user(req, res) {
    console.log("esta llegando aqui");
    console.log(req.body);
    const {
      nom_usuario,
      contrasenia,
      correo,
      PersonaId,
      RolId
    } = req.body;
    if (nom_usuario) {
      // verificando si ya existe ese usuario
      let usuario = await _models.default.Usuario.findOne({
        where: {
          nom_usuario: nom_usuario
        }
      });
      if (!usuario) {
        // cifrar password

        const hash = await _bcrypt.default.hash(contrasenia, 12);
        const UsuarioSave = await _models.default.Usuario.create({
          nom_usuario: nom_usuario,
          contrasenia: hash,
          correo: correo,
          PersonaId: PersonaId
        });
        await UsuarioSave.reload();
        console.log("Recuperando Usuario ", UsuarioSave);
        await _models.default.Usuario_Tiene_Rol.create({
          UsuarioId: UsuarioSave.id,
          RolId: RolId
        });
        return res.status(201).json({
          mensaje: "Usuario Registrado Correctamente Por Admin"
        });
      } else {
        return res.status(422).json({
          mensaje: `El usuario ${nom_usuario} ya existe`
        });
      }
    } else {
      res.status(422).json({
        mensaje: "El Usuario es Obligatorio"
      });
    }
  },
  async actualizar(req, res) {
    // console.log("esta llegando aqui para actualizar");
    // console.log(req);
    let ID = req.params.id;
    // console.log("lo que esta lleagnod", req.body);
    const {
      nom_usuario,
      contrasenia,
      correo,
      PersonaId,
      RolId
    } = req.body;

    // verificando si ya existe ese usuario

    try {
      const hash = await _bcrypt.default.hash(contrasenia, 12);
      console.log("cifreando passw ", hash);
      const UsuarioSave = await _models.default.Usuario.update({
        nom_usuario: nom_usuario,
        contrasenia: hash,
        correo: correo,
        PersonaId: PersonaId
      }, {
        where: {
          id: ID
        }
      });
      console.log("actualiza el usuario");
      let usuario_rec = await _models.default.Usuario.findOne({
        order: [["updatedAt", "DESC"]]
      });
      console.log("resupera el actualizado ", usuario_rec, usuario_rec.id, RolId);

      // ahora a actualizar el rol
      let auxi = await _models.default.Usuario_Tiene_Rol.update({
        RolId: RolId
      }, {
        where: {
          UsuarioId: ID
        }
      });
      console.log("depues de actualizar rol", auxi);
      return res.status(201).json({
        mensaje: "Usuario Registrado Correctamente Por Admin"
      });
    } catch (error) {
      res.status(500).json({
        mensaje: "Error  al Actualizar"
      });
    }
  },
  async actualizarPerfil(req, res) {
    // console.log("esta llegando aqui para actualizar");
    // console.log(req);
    let ID = req.params.id;
    // console.log("lo que esta lleagnod", req.body);
    const {
      contrasenia,
      correo
    } = req.body;

    // verificando si ya existe ese usuario

    try {
      const hash = await _bcrypt.default.hash(contrasenia, 12);
      console.log("cifreando passw ", hash);
      const UsuarioSave = await _models.default.Usuario.update({
        contrasenia: hash,
        correo: correo
      }, {
        where: {
          id: ID
        }
      });
      // console.log("actualiza el usuario");
      let usuario_rec = await _models.default.Usuario.findOne({
        order: [["updatedAt", "DESC"]]
      });
      // console.log(
      //   "resupera el actualizado ",
      //   usuario_rec,
      //   usuario_rec.id,
      //   RolId
      // );

      // ahora a actualizar el rol

      return res.status(201).json({
        mensaje: "Usuario Registrado Correctamente Por Admin"
      });
    } catch (error) {
      res.status(500).json({
        mensaje: "Error  al Actualizar"
      });
    }
  },
  async perfil(req, res) {
    return res.status(200).json({
      mensaje: "Ok",
      user: req.nom_usuario
    });
  },
  async logout(req, res) {}
};
exports.default = _default;