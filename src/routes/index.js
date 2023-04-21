import {Router} from 'express'
import authController from '../controllers/auth.controller'
import personaController from '../controllers/persona.controller'
import usuarioController from '../controllers/usuario.controller'
import rolController from '../controllers/rol.controller'
import expositorController from '../controllers/expositor.controller'
import usuario_tiene_rolController from '../controllers/usuario.tiene.rol.controller'
import material_de_actividadController from '../controllers/material.de.actividad.controller'
import institucionController from '../controllers/institucion.controller'
import objetivoController from '../controllers/objetivo.controller'
import eventoController from '../controllers/evento.controller'
import recursoController from '../controllers/recurso.controller'
import ambienteController from '../controllers/ambiente.controller'
import categoriaController from '../controllers/categoria.controller'
import actividad_eventoController from '../controllers/actividad.evento.controller'
import fotoController from '../controllers/foto.controller'
import certificadoController from '../controllers/certificado.controller'
import actividad_evento_has_expositorController from '../controllers/actividad.evento.has.expositor.controller'
import actividad_evento_solicita_ambienteController from '../controllers/actividad.evento.solicita.ambiente.controller'
import usuario_se_inscribe_eventoController from '../controllers/usuario.se.inscribe.evento.controller'
import usuario_califica_eventoController from '../controllers/usuario.califica.evento.controller'
import usuario_reserva_participacion_eventoController from '../controllers/usuario.reserva.participacion.evento.controller'
import usuario_comenta_eventoController from '../controllers/usuario.comenta.evento.controller'
import usuario_comenta_actividad_eventoController from '../controllers/usuario.comenta.actividad.evento.controller'
import usuario_asiste_actividad_eventoController from '../controllers/usuario.asiste.actividad.evento.controller'
import sendEmailController from './../controllers/send.email.controller'
import info_sistemaController from './../controllers/informacion_sistema.controller'
import * as authMiddleware from '../middlewares/auth.middleware'
export const Route = Router();

// login
// hay que proteger el pefil, logout
Route.post('/auth/login', authController.login)
Route.post('/auth/register', authController.register)
Route.post('/auth/register_user', authController.register_user)
Route.put('/auth/actualizar/:id', authMiddleware.auth, authController.actualizar)
Route.get('/auth/perfil', authMiddleware.auth, authController.perfil)
Route.post('/auth/logout', authMiddleware.auth, authController.logout)
Route.post('/auth/sendEmail', sendEmailController.enviarCorreo)

//infosistema
Route.post('/infosistema', authMiddleware.auth, info_sistemaController.guardar)
Route.get('/infosistema', authMiddleware.auth, info_sistemaController.mostrar)

// creando los endpoints (rutas)
Route.get('/persona', authMiddleware.auth, personaController.mostrar);
Route.post('/persona', authMiddleware.auth, personaController.guardar);
Route.get('/persona/:id', authMiddleware.auth, personaController.mostrarId);
Route.put('/persona/:id', authMiddleware.auth, personaController.actualizar);
Route.delete('/persona/:id', authMiddleware.auth, personaController.eliminar);


// para usuario
Route.get('/usuario', authMiddleware.auth, usuarioController.mostrar);
Route.post('/usuario', authMiddleware.auth, usuarioController.guardar);
Route.get('/usuario/:id',  usuarioController.mostrarId);
Route.put('/usuario/:id', authMiddleware.auth, usuarioController.actualizar);
Route.delete('/usuario/:id', authMiddleware.auth, usuarioController.eliminar);

//Rol
Route.get('/rol', authMiddleware.auth, rolController.mostrar);
Route.post('/rol', authMiddleware.auth, rolController.guardar);
Route.get('/rol/:id',  rolController.mostrarId);
Route.put('/rol/:id', authMiddleware.auth, rolController.actualizar);
Route.delete('/rol/:id', authMiddleware.auth, rolController.eliminar);

//Usuario_Tiene_Rol
Route.get('/usuario_tiene_rol', authMiddleware.auth, usuario_tiene_rolController.mostrar);
Route.post('/usuario_tiene_rol', authMiddleware.auth, usuario_tiene_rolController.guardar);
Route.get('/usuario_tiene_rol/:id', authMiddleware.auth, usuario_tiene_rolController.mostrarId);
Route.put('/usuario_tiene_rol/:id', authMiddleware.auth, usuario_tiene_rolController.actualizar);
Route.delete('/usuario_tiene_rol/:id', authMiddleware.auth, usuario_tiene_rolController.eliminar);


// Expositor
Route.get('/expositor', authMiddleware.auth, expositorController.mostrar);
Route.post('/expositor', authMiddleware.auth, expositorController.guardar);
Route.get('/expositor/:id', authMiddleware.auth, expositorController.mostrarId);
Route.put('/expositor/:id', authMiddleware.auth, expositorController.actualizar);
Route.delete('/expositor/:id', authMiddleware.auth, expositorController.eliminar);

Route.get('/material_de_actividad', authMiddleware.auth, material_de_actividadController.mostrar);
Route.post('/material_de_actividad', authMiddleware.auth, material_de_actividadController.guardar);
Route.get('/material_de_actividad/:id', authMiddleware.auth, material_de_actividadController.mostrarId);
Route.put('/material_de_actividad/:id', authMiddleware.auth, material_de_actividadController.actualizar);
Route.delete('/material_de_actividad/:id', authMiddleware.auth, material_de_actividadController.eliminar);

Route.get('/institucion', authMiddleware.auth, institucionController.mostrar);
Route.post('/institucion', authMiddleware.auth, institucionController.guardar);
Route.get('/institucion/:id', authMiddleware.auth, institucionController.mostrarId);
Route.put('/institucion/:id', authMiddleware.auth, institucionController.actualizar);
Route.delete('/institucion/:id', authMiddleware.auth, institucionController.eliminar);

Route.get('/objetivo', authMiddleware.auth, objetivoController.mostrar);
Route.post('/objetivo', authMiddleware.auth, objetivoController.guardar);
Route.get('/objetivo/:id', authMiddleware.auth, objetivoController.mostrarId);
Route.put('/objetivo/:id', authMiddleware.auth, objetivoController.actualizar);
Route.delete('/objetivo/:id', authMiddleware.auth, objetivoController.eliminar);

Route.get('/evento', eventoController.mostrar);
Route.post('/evento', authMiddleware.auth, eventoController.guardar);
Route.get('/evento/:id', authMiddleware.auth, eventoController.mostrarId);
Route.put('/evento/:id', authMiddleware.auth, eventoController.actualizar);
Route.delete('/evento/:id', authMiddleware.auth, eventoController.eliminar);

Route.get('/recurso', authMiddleware.auth, recursoController.mostrar);
Route.post('/recurso', authMiddleware.auth, recursoController.guardar);
Route.get('/recurso/:id', authMiddleware.auth, recursoController.mostrarId);
Route.put('/recurso/:id', authMiddleware.auth, recursoController.actualizar);
Route.delete('/recurso/:id', authMiddleware.auth, recursoController.eliminar);

Route.get('/ambiente', authMiddleware.auth, ambienteController.mostrar);
Route.post('/ambiente', authMiddleware.auth, ambienteController.guardar);
Route.get('/ambiente/:id', authMiddleware.auth, ambienteController.mostrarId);
Route.put('/ambiente/:id', authMiddleware.auth, ambienteController.actualizar);
Route.delete('/ambiente/:id', authMiddleware.auth, ambienteController.eliminar);

Route.get('/categoria', authMiddleware.auth, categoriaController.mostrar);
Route.post('/categoria', authMiddleware.auth, categoriaController.guardar);
Route.get('/categoria/:id', authMiddleware.auth, categoriaController.mostrarId);
Route.put('/categoria/:id', authMiddleware.auth, categoriaController.actualizar);
Route.delete('/categoria/:id', authMiddleware.auth, categoriaController.eliminar);

Route.get('/actividad_evento', authMiddleware.auth, actividad_eventoController.mostrar);
Route.post('/actividad_evento', authMiddleware.auth, actividad_eventoController.guardar);
Route.get('/actividad_evento/:id', authMiddleware.auth, actividad_eventoController.mostrarId);
Route.put('/actividad_evento/:id', authMiddleware.auth, actividad_eventoController.actualizar);
Route.delete('/actividad_evento/:id', authMiddleware.auth, actividad_eventoController.eliminar);

Route.get('/foto', authMiddleware.auth, fotoController.mostrar);
Route.post('/foto', authMiddleware.auth, fotoController.guardar);
Route.get('/foto/:id', authMiddleware.auth, fotoController.mostrarId);
Route.put('/foto/:id', authMiddleware.auth, fotoController.actualizar);
Route.delete('/foto/:id', authMiddleware.auth, fotoController.eliminar);

Route.get('/certificado', authMiddleware.auth, certificadoController.mostrar);
Route.post('/certificado', authMiddleware.auth, certificadoController.guardar);
Route.get('/certificado/:id', authMiddleware.auth, certificadoController.mostrarId);
Route.put('/certificado/:id', authMiddleware.auth, certificadoController.actualizar);
Route.delete('/certificado/:id', authMiddleware.auth, certificadoController.eliminar);

Route.get('/actividad_evento_has_expositor', authMiddleware.auth, actividad_evento_has_expositorController.mostrar);
Route.post('/actividad_evento_has_expositor', authMiddleware.auth, actividad_evento_has_expositorController.guardar);
Route.get('/actividad_evento_has_expositor/:id', authMiddleware.auth, actividad_evento_has_expositorController.mostrarId);
Route.put('/actividad_evento_has_expositor/:id', authMiddleware.auth, actividad_evento_has_expositorController.actualizar);
Route.delete('/actividad_evento_has_expositor/:id', authMiddleware.auth, actividad_evento_has_expositorController.eliminar);

Route.get('/actividad_evento_solicita_ambiente', authMiddleware.auth, actividad_evento_solicita_ambienteController.mostrar);
Route.post('/actividad_evento_solicita_ambiente', authMiddleware.auth, actividad_evento_solicita_ambienteController.guardar);
Route.get('/actividad_evento_solicita_ambiente/:id', authMiddleware.auth, actividad_evento_solicita_ambienteController.mostrarId);
Route.put('/actividad_evento_solicita_ambiente/:id', authMiddleware.auth, actividad_evento_solicita_ambienteController.actualizar);
Route.delete('/actividad_evento_solicita_ambiente/:id', authMiddleware.auth, actividad_evento_solicita_ambienteController.eliminar);

Route.get('/usuario_se_inscribe_evento', authMiddleware.auth, usuario_se_inscribe_eventoController.mostrar);
Route.post('/usuario_se_inscribe_evento', authMiddleware.auth, usuario_se_inscribe_eventoController.guardar);
Route.get('/usuario_se_inscribe_evento/:id', authMiddleware.auth, usuario_se_inscribe_eventoController.mostrarId);
Route.put('/usuario_se_inscribe_evento/:id', authMiddleware.auth, usuario_se_inscribe_eventoController.actualizar);
Route.delete('/usuario_se_inscribe_evento/:id', authMiddleware.auth, usuario_se_inscribe_eventoController.eliminar);

Route.get('/usuario_califica_evento', authMiddleware.auth, usuario_califica_eventoController.mostrar);
Route.post('/usuario_califica_evento', authMiddleware.auth, usuario_califica_eventoController.guardar);
Route.get('/usuario_califica_evento/:id', authMiddleware.auth, usuario_califica_eventoController.mostrarId);
Route.put('/usuario_califica_evento/:id', authMiddleware.auth, usuario_califica_eventoController.actualizar);
Route.delete('/usuario_califica_evento/:id', authMiddleware.auth, usuario_califica_eventoController.eliminar);

Route.get('/usuario_reserva_participacion_evento', authMiddleware.auth, usuario_reserva_participacion_eventoController.mostrar);
Route.post('/usuario_reserva_participacion_evento', authMiddleware.auth, usuario_reserva_participacion_eventoController.guardar);
Route.get('/usuario_reserva_participacion_evento/:id', authMiddleware.auth, usuario_reserva_participacion_eventoController.mostrarId);
Route.put('/usuario_reserva_participacion_evento/:id', authMiddleware.auth, usuario_reserva_participacion_eventoController.actualizar);
Route.delete('/usuario_reserva_participacion_evento/:id', authMiddleware.auth, usuario_reserva_participacion_eventoController.eliminar);

Route.get('/usuario_comenta_evento', authMiddleware.auth, usuario_comenta_eventoController.mostrar);
Route.post('/usuario_comenta_evento', authMiddleware.auth, usuario_comenta_eventoController.guardar);
Route.get('/usuario_comenta_evento/:id', authMiddleware.auth, usuario_comenta_eventoController.mostrarId);
Route.put('/usuario_comenta_evento/:id', authMiddleware.auth, usuario_comenta_eventoController.actualizar);
Route.delete('/usuario_comenta_evento/:id', authMiddleware.auth, usuario_comenta_eventoController.eliminar);

Route.get('/usuario_comenta_actividad_evento', authMiddleware.auth, usuario_comenta_actividad_eventoController.mostrar);
Route.post('/usuario_comenta_actividad_evento', authMiddleware.auth, usuario_comenta_actividad_eventoController.guardar);
Route.get('/usuario_comenta_actividad_evento/:id', authMiddleware.auth, usuario_comenta_actividad_eventoController.mostrarId);
Route.put('/usuario_comenta_actividad_evento/:id', authMiddleware.auth, usuario_comenta_actividad_eventoController.actualizar);
Route.delete('/usuario_comenta_actividad_evento/:id', authMiddleware.auth, usuario_comenta_actividad_eventoController.eliminar);

Route.get('/usuario_asiste_actividad_evento', authMiddleware.auth, usuario_asiste_actividad_eventoController.mostrar);
Route.post('/usuario_asiste_actividad_evento', authMiddleware.auth, usuario_asiste_actividad_eventoController.guardar);
Route.get('/usuario_asiste_actividad_evento/:id', authMiddleware.auth, usuario_asiste_actividad_eventoController.mostrarId);
Route.put('/usuario_asiste_actividad_evento/:id', authMiddleware.auth, usuario_asiste_actividad_eventoController.actualizar);
Route.delete('/usuario_asiste_actividad_evento/:id', authMiddleware.auth, usuario_asiste_actividad_eventoController.eliminar);
