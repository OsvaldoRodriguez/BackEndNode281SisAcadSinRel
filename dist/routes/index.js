"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Route = void 0;
var _express = require("express");
var _auth = _interopRequireDefault(require("../controllers/auth.controller"));
var _persona = _interopRequireDefault(require("../controllers/persona.controller"));
var _usuario = _interopRequireDefault(require("../controllers/usuario.controller"));
var _rol = _interopRequireDefault(require("../controllers/rol.controller"));
var _expositor = _interopRequireDefault(require("../controllers/expositor.controller"));
var _usuarioTieneRol = _interopRequireDefault(require("../controllers/usuario.tiene.rol.controller"));
var _materialDeActividad = _interopRequireDefault(require("../controllers/material.de.actividad.controller"));
var _institucion = _interopRequireDefault(require("../controllers/institucion.controller"));
var _objetivo = _interopRequireDefault(require("../controllers/objetivo.controller"));
var _evento = _interopRequireDefault(require("../controllers/evento.controller"));
var _recurso = _interopRequireDefault(require("../controllers/recurso.controller"));
var _ambiente = _interopRequireDefault(require("../controllers/ambiente.controller"));
var _categoria = _interopRequireDefault(require("../controllers/categoria.controller"));
var _actividadEvento = _interopRequireDefault(require("../controllers/actividad.evento.controller"));
var _foto = _interopRequireDefault(require("../controllers/foto.controller"));
var _certificado = _interopRequireDefault(require("../controllers/certificado.controller"));
var _actividadEventoHasExpositor = _interopRequireDefault(require("../controllers/actividad.evento.has.expositor.controller"));
var _actividadEventoSolicitaAmbiente = _interopRequireDefault(require("../controllers/actividad.evento.solicita.ambiente.controller"));
var _usuarioSeInscribeEvento = _interopRequireDefault(require("../controllers/usuario.se.inscribe.evento.controller"));
var _usuarioCalificaEvento = _interopRequireDefault(require("../controllers/usuario.califica.evento.controller"));
var _usuarioReservaParticipacionEvento = _interopRequireDefault(require("../controllers/usuario.reserva.participacion.evento.controller"));
var _usuarioComentaEvento = _interopRequireDefault(require("../controllers/usuario.comenta.evento.controller"));
var _usuarioComentaActividadEvento = _interopRequireDefault(require("../controllers/usuario.comenta.actividad.evento.controller"));
var _usuarioAsisteActividadEvento = _interopRequireDefault(require("../controllers/usuario.asiste.actividad.evento.controller"));
var _sendEmail = _interopRequireDefault(require("./../controllers/send.email.controller"));
var _auditoria = _interopRequireDefault(require("./../controllers/auditoria.controller"));
var _informacion_sistema = _interopRequireDefault(require("./../controllers/informacion_sistema.controller"));
var authMiddleware = _interopRequireWildcard(require("../middlewares/auth.middleware"));
var _multer = _interopRequireDefault(require("multer"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Route = (0, _express.Router)();

// para subir imagenes (esta en su mismo crud)
exports.Route = Route;
function almacenar(direccion) {
  const storage = _multer.default.diskStorage({
    destination: function (req, file, cb) {
      cb(null, direccion);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + '-' + file.originalname);
    }
  });
  return storage;
}
Route.get('/auditoria', authMiddleware.auth, _auditoria.default.mostrar);

// login
// hay que proteger el pefil, logout
Route.post('/auth/login', _auth.default.login);
Route.post('/auth/register', _auth.default.register);
Route.post('/auth/register_user', _auth.default.register_user);
Route.put('/auth/actualizar/:id', authMiddleware.auth, _auth.default.actualizar);
Route.put('/auth/actualizar-perfil/:id', authMiddleware.auth, _auth.default.actualizarPerfil);
Route.get('/auth/perfil', authMiddleware.auth, _auth.default.perfil);
Route.post('/auth/logout', authMiddleware.auth, _auth.default.logout);
Route.post('/auth/sendEmail', _sendEmail.default.enviarCorreo);

//infosistema
Route.post('/infosistema', _informacion_sistema.default.guardar);
Route.get('/infosistema', _informacion_sistema.default.mostrar);
Route.get('/infosistema/:id', authMiddleware.auth, _informacion_sistema.default.mostrarId);
var upload = (0, _multer.default)({
  storage: almacenar('./public/archivos/imagenes/infosistema')
});
Route.post('/infosistema/:id/actualizar-imagen', upload.single("imagen"), _informacion_sistema.default.actualizarImagen);

// creando los endpoints (rutas)
Route.get('/persona', _persona.default.mostrar);
Route.post('/persona', authMiddleware.auth, _persona.default.guardar);
Route.get('/persona/:id', _persona.default.mostrarId);
Route.put('/persona/:id', authMiddleware.auth, _persona.default.actualizar);
Route.delete('/persona/:id', authMiddleware.auth, _persona.default.eliminar);

// para usuario
Route.get('/usuario', _usuario.default.mostrar);
Route.get('/usuario-persona', authMiddleware.auth, _usuario.default.mostrarConPersonaYBol);
Route.post('/usuario', authMiddleware.auth, _usuario.default.guardar);
Route.get('/usuario/:id', _usuario.default.mostrarId);
Route.put('/usuario/:id', authMiddleware.auth, _usuario.default.actualizar);
Route.delete('/usuario/:id', authMiddleware.auth, _usuario.default.eliminar);
var upload = (0, _multer.default)({
  storage: almacenar('./public/archivos/imagenes/usuarios')
});
Route.post('/usuario/:id/actualizar-imagen', upload.single("imagen"), _usuario.default.actualizarImagen);

//Rol
Route.get('/rol', _rol.default.mostrar);
Route.post('/rol', authMiddleware.auth, _rol.default.guardar);
Route.get('/rol/:id', _rol.default.mostrarId);
Route.put('/rol/:id', authMiddleware.auth, _rol.default.actualizar);
Route.delete('/rol/:id', authMiddleware.auth, _rol.default.eliminar);

//Usuario_Tiene_Rol
Route.get('/usuario_tiene_rol', authMiddleware.auth, _usuarioTieneRol.default.mostrar);
Route.post('/usuario_tiene_rol', authMiddleware.auth, _usuarioTieneRol.default.guardar);
Route.get('/usuario_tiene_rol/:id', authMiddleware.auth, _usuarioTieneRol.default.mostrarId);
Route.put('/usuario_tiene_rol/:id', authMiddleware.auth, _usuarioTieneRol.default.actualizar);
Route.delete('/usuario_tiene_rol/:id', authMiddleware.auth, _usuarioTieneRol.default.eliminar);

// Expositor
Route.get('/expositor', _expositor.default.mostrar);
Route.post('/expositor', authMiddleware.auth, _expositor.default.guardar);
Route.get('/expositor/:id', authMiddleware.auth, _expositor.default.mostrarId);
Route.put('/expositor/:id', authMiddleware.auth, _expositor.default.actualizar);
Route.delete('/expositor/:id', authMiddleware.auth, _expositor.default.eliminar);
Route.get('/material_de_actividad', _materialDeActividad.default.mostrar);
Route.put('/material_de_actividad_by_expositor/:id', authMiddleware.auth, _materialDeActividad.default.mostrarIdByExpositor);
Route.post('/material_de_actividad', _materialDeActividad.default.guardar);
Route.get('/material_de_actividad/:id', _materialDeActividad.default.mostrarId);
Route.put('/material_de_actividad/:id', authMiddleware.auth, _materialDeActividad.default.actualizar);
Route.delete('/material_de_actividad/:id', authMiddleware.auth, _materialDeActividad.default.eliminar);
var upload = (0, _multer.default)({
  storage: almacenar('./public/archivos/pdf/material_expositor')
});
Route.post('/material_de_actividad/:id/actualizar-imagen', upload.single("imagen"), _materialDeActividad.default.actualizarImagen);
Route.get('/institucion', authMiddleware.auth, _institucion.default.mostrar);
Route.post('/institucion', authMiddleware.auth, _institucion.default.guardar);
Route.get('/institucion/:id', authMiddleware.auth, _institucion.default.mostrarId);
Route.put('/institucion/:id', authMiddleware.auth, _institucion.default.actualizar);
Route.delete('/institucion/:id', authMiddleware.auth, _institucion.default.eliminar);
Route.get('/objetivo', authMiddleware.auth, _objetivo.default.mostrar);
Route.post('/objetivo', authMiddleware.auth, _objetivo.default.guardar);
Route.get('/objetivo/:id', authMiddleware.auth, _objetivo.default.mostrarId);
Route.put('/objetivo/:id', authMiddleware.auth, _objetivo.default.actualizar);
Route.delete('/objetivo/:id', authMiddleware.auth, _objetivo.default.eliminar);
Route.get('/evento', _evento.default.mostrar);
Route.post('/evento', _evento.default.guardar);
Route.get('/evento/:id', _evento.default.mostrarId);
Route.put('/evento/:id', authMiddleware.auth, _evento.default.actualizar);
Route.post('/evento/:id', authMiddleware.auth, _evento.default.eliminar);
// solo eso para subir pasar la direecion
var upload = (0, _multer.default)({
  storage: almacenar('./public/archivos/imagenes/eventos')
});
Route.post('/evento/:id/actualizar-imagen', upload.single("imagen"), _evento.default.actualizarImagen);
Route.get('/recurso', authMiddleware.auth, _recurso.default.mostrar);
Route.post('/recurso', authMiddleware.auth, _recurso.default.guardar);
Route.get('/recurso/:id', authMiddleware.auth, _recurso.default.mostrarId);
Route.put('/recurso/:id', authMiddleware.auth, _recurso.default.actualizar);
Route.delete('/recurso/:id', authMiddleware.auth, _recurso.default.eliminar);
Route.get('/ambiente', authMiddleware.auth, _ambiente.default.mostrar);
Route.post('/ambiente', authMiddleware.auth, _ambiente.default.guardar);
Route.get('/ambiente/:id', authMiddleware.auth, _ambiente.default.mostrarId);
Route.put('/ambiente/:id', authMiddleware.auth, _ambiente.default.actualizar);
Route.delete('/ambiente/:id', authMiddleware.auth, _ambiente.default.eliminar);
Route.get('/categoria', authMiddleware.auth, _categoria.default.mostrar);
Route.post('/categoria', authMiddleware.auth, _categoria.default.guardar);
Route.get('/categoria/:id', authMiddleware.auth, _categoria.default.mostrarId);
Route.put('/categoria/:id', authMiddleware.auth, _categoria.default.actualizar);
Route.delete('/categoria/:id', authMiddleware.auth, _categoria.default.eliminar);
Route.get('/actividad_evento', _actividadEvento.default.mostrar);
Route.post('/actividad_evento', authMiddleware.auth, _actividadEvento.default.guardar);
Route.get('/actividad_evento/:id', _actividadEvento.default.mostrarId);
Route.put('/actividad_evento/:id', authMiddleware.auth, _actividadEvento.default.actualizar);
Route.delete('/actividad_evento/:id', authMiddleware.auth, _actividadEvento.default.eliminar);
Route.get('/foto', authMiddleware.auth, _foto.default.mostrar);
Route.post('/foto', authMiddleware.auth, _foto.default.guardar);
Route.get('/foto/:id', authMiddleware.auth, _foto.default.mostrarId);
Route.put('/foto/:id', authMiddleware.auth, _foto.default.actualizar);
Route.delete('/foto/:id', authMiddleware.auth, _foto.default.eliminar);
Route.get('/certificado', authMiddleware.auth, _certificado.default.mostrar);
Route.post('/certificado', authMiddleware.auth, _certificado.default.guardar);
Route.get('/certificado/:id', authMiddleware.auth, _certificado.default.mostrarId);
Route.put('/certificado/:id', authMiddleware.auth, _certificado.default.actualizar);
Route.delete('/certificado/:id', authMiddleware.auth, _certificado.default.eliminar);
Route.get('/actividad_evento_has_expositor', _actividadEventoHasExpositor.default.mostrar);
Route.post('/actividad_evento_has_expositor', authMiddleware.auth, _actividadEventoHasExpositor.default.guardar);
Route.get('/actividad_evento_has_expositor/:id', authMiddleware.auth, _actividadEventoHasExpositor.default.mostrarId);
Route.put('/actividad_evento_has_expositor/:id', authMiddleware.auth, _actividadEventoHasExpositor.default.actualizar);
Route.delete('/actividad_evento_has_expositor/:id', authMiddleware.auth, _actividadEventoHasExpositor.default.eliminar);
Route.get('/actividad_evento_solicita_ambiente', authMiddleware.auth, _actividadEventoSolicitaAmbiente.default.mostrar);
Route.post('/actividad_evento_solicita_ambiente', authMiddleware.auth, _actividadEventoSolicitaAmbiente.default.guardar);
Route.get('/actividad_evento_solicita_ambiente/:id', authMiddleware.auth, _actividadEventoSolicitaAmbiente.default.mostrarId);
Route.put('/actividad_evento_solicita_ambiente/:id', authMiddleware.auth, _actividadEventoSolicitaAmbiente.default.actualizar);
Route.delete('/actividad_evento_solicita_ambiente/:id', authMiddleware.auth, _actividadEventoSolicitaAmbiente.default.eliminar);
Route.get('/usuario_se_inscribe_evento', authMiddleware.auth, _usuarioSeInscribeEvento.default.mostrar);
Route.post('/usuario_se_inscribe_evento', _usuarioSeInscribeEvento.default.guardar);
Route.get('/usuario_se_inscribe_evento/:id', authMiddleware.auth, _usuarioSeInscribeEvento.default.mostrarId);
Route.put('/usuario_se_inscribe_evento/:id', authMiddleware.auth, _usuarioSeInscribeEvento.default.actualizar);
Route.delete('/usuario_se_inscribe_evento/:id', authMiddleware.auth, _usuarioSeInscribeEvento.default.eliminar);
Route.get('/usuario_califica_evento', authMiddleware.auth, _usuarioCalificaEvento.default.mostrar);
Route.post('/usuario_califica_evento', authMiddleware.auth, _usuarioCalificaEvento.default.guardar);
Route.get('/usuario_califica_evento/:id', authMiddleware.auth, _usuarioCalificaEvento.default.mostrarId);
Route.put('/usuario_califica_evento/:id', authMiddleware.auth, _usuarioCalificaEvento.default.actualizar);
Route.delete('/usuario_califica_evento/:id', authMiddleware.auth, _usuarioCalificaEvento.default.eliminar);
Route.get('/usuario_reserva_participacion_evento', authMiddleware.auth, _usuarioReservaParticipacionEvento.default.mostrar);
Route.post('/usuario_reserva_participacion_evento', _usuarioReservaParticipacionEvento.default.guardar);
Route.get('/usuario_reserva_participacion_evento/:id', authMiddleware.auth, _usuarioReservaParticipacionEvento.default.mostrarId);
Route.put('/usuario_reserva_participacion_evento/:id', authMiddleware.auth, _usuarioReservaParticipacionEvento.default.actualizar);
Route.delete('/usuario_reserva_participacion_evento/:id', authMiddleware.auth, _usuarioReservaParticipacionEvento.default.eliminar);
Route.get('/usuario_comenta_evento', _usuarioComentaEvento.default.mostrar);
Route.post('/usuario_comenta_evento', _usuarioComentaEvento.default.guardar);
Route.get('/usuario_comenta_evento/:id', _usuarioComentaEvento.default.mostrarId);
Route.put('/usuario_comenta_evento/:id', authMiddleware.auth, _usuarioComentaEvento.default.actualizar);
Route.delete('/usuario_comenta_evento/:id', authMiddleware.auth, _usuarioComentaEvento.default.eliminar);
Route.get('/usuario_comenta_actividad_evento', authMiddleware.auth, _usuarioComentaActividadEvento.default.mostrar);
Route.post('/usuario_comenta_actividad_evento', authMiddleware.auth, _usuarioComentaActividadEvento.default.guardar);
Route.get('/usuario_comenta_actividad_evento/:id', authMiddleware.auth, _usuarioComentaActividadEvento.default.mostrarId);
Route.put('/usuario_comenta_actividad_evento/:id', authMiddleware.auth, _usuarioComentaActividadEvento.default.actualizar);
Route.delete('/usuario_comenta_actividad_evento/:id', authMiddleware.auth, _usuarioComentaActividadEvento.default.eliminar);
Route.get('/usuario_asiste_actividad_evento', authMiddleware.auth, _usuarioAsisteActividadEvento.default.mostrar);
Route.post('/usuario_asiste_actividad_evento', authMiddleware.auth, _usuarioAsisteActividadEvento.default.guardar);
Route.get('/usuario_asiste_actividad_evento/:id', authMiddleware.auth, _usuarioAsisteActividadEvento.default.mostrarId);
Route.put('/usuario_asiste_actividad_evento/:id', authMiddleware.auth, _usuarioAsisteActividadEvento.default.actualizar);
Route.delete('/usuario_asiste_actividad_evento/:id', authMiddleware.auth, _usuarioAsisteActividadEvento.default.eliminar);