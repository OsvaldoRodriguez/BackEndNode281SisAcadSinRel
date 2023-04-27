"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// para verificar si tiene acceso con el token

// next es si deja pasar o no deja pasar
const auth = function (req, res, next) {
  let token = null;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return res.status(401).json({
      auth: false,
      mensaje: "No se proporciono el Token de Seguridad"
    });
  }

  // entonces si tiene token
  _jsonwebtoken.default.verify(token, 'MI_CODIGO_SECRETO', (error, decode) => {
    if (error) return res.status(401).json({
      mensaje: "El Token ya caduco",
      auth: false
    });
    // todo bien -> puede ingresar
    req = decode.nom_usuario; // recuperando el usuario
    next();
  });
};
exports.auth = auth;