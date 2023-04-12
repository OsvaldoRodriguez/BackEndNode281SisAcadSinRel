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


import * as authMiddleware from '../middlewares/auth.middleware'
export const Route = Router();

// login
// hay que proteger el pefil, logout
Route.post('/auth/login', authController.login)
Route.post('/auth/register', authController.register)
Route.get('/auth/perfil', authMiddleware.auth, authController.perfil)
Route.post('/auth/logout', authMiddleware.auth, authController.logout)


// creando los endpoints (rutas)
Route.get('/persona', personaController.mostrar);
Route.post('/persona', personaController.guardar);
Route.get('/persona/:id', personaController.mostrarId);
Route.put('/persona/:id', personaController.actualizar);
Route.delete('/persona/:id', personaController.eliminar);

// para usuario
Route.get('/usuario', usuarioController.mostrar);
Route.post('/usuario', usuarioController.guardar);
Route.get('/usuario/:id', usuarioController.mostrarId);
Route.put('/usuario/:id', usuarioController.actualizar);
Route.delete('/usuario/:id', usuarioController.eliminar);

//Rol
Route.get('/rol', rolController.mostrar);
Route.post('/rol', rolController.guardar);
Route.get('/rol/:id', rolController.mostrarId);
Route.put('/rol/:id', rolController.actualizar);
Route.delete('/rol/:id', rolController.eliminar);

//Usuario_Tiene_Rol
Route.get('/usuario_tiene_rol', usuario_tiene_rolController.mostrar);
Route.post('/usuario_tiene_rol', usuario_tiene_rolController.guardar);
Route.get('/usuario_tiene_rol/:id', usuario_tiene_rolController.mostrarId);
Route.put('/usuario_tiene_rol/:id', usuario_tiene_rolController.actualizar);
Route.delete('/usuario_tiene_rol/:id', usuario_tiene_rolController.eliminar);


// Expositor
Route.get('/expositor', expositorController.mostrar);
Route.post('/expositor', expositorController.guardar);
Route.get('/expositor/:id', expositorController.mostrarId);
Route.put('/expositor/:id', expositorController.actualizar);
Route.delete('/expositor/:id', expositorController.eliminar);

Route.get('/material_de_actividad', material_de_actividadController.mostrar);
Route.post('/material_de_actividad', material_de_actividadController.guardar);
Route.get('/material_de_actividad/:id', material_de_actividadController.mostrarId);
Route.put('/material_de_actividad/:id', material_de_actividadController.actualizar);
Route.delete('/material_de_actividad/:id', material_de_actividadController.eliminar);

Route.get('/institucion', institucionController.mostrar);
Route.post('/institucion', institucionController.guardar);
Route.get('/institucion/:id', institucionController.mostrarId);
Route.put('/institucion/:id', institucionController.actualizar);
Route.delete('/institucion/:id', institucionController.eliminar);

Route.get('/objetivo', objetivoController.mostrar);
Route.post('/objetivo', objetivoController.guardar);
Route.get('/objetivo/:id', objetivoController.mostrarId);
Route.put('/objetivo/:id', objetivoController.actualizar);
Route.delete('/objetivo/:id', objetivoController.eliminar);

Route.get('/evento', eventoController.mostrar);
Route.post('/evento', authMiddleware.auth, eventoController.guardar);
Route.get('/evento/:id', authMiddleware.auth, eventoController.mostrarId);
Route.put('/evento/:id', authMiddleware.auth, eventoController.actualizar);
Route.delete('/evento/:id', authMiddleware.auth, eventoController.eliminar);

Route.get('/recurso', recursoController.mostrar);
Route.post('/recurso', recursoController.guardar);
Route.get('/recurso/:id', recursoController.mostrarId);
Route.put('/recurso/:id', recursoController.actualizar);
Route.delete('/recurso/:id', recursoController.eliminar);

Route.get('/ambiente', ambienteController.mostrar);
Route.post('/ambiente', ambienteController.guardar);
Route.get('/ambiente/:id', ambienteController.mostrarId);
Route.put('/ambiente/:id', ambienteController.actualizar);
Route.delete('/ambiente/:id', ambienteController.eliminar);

Route.get('/categoria', categoriaController.mostrar);
Route.post('/categoria', categoriaController.guardar);
Route.get('/categoria/:id', categoriaController.mostrarId);
Route.put('/categoria/:id', categoriaController.actualizar);
Route.delete('/categoria/:id', categoriaController.eliminar);

Route.get('/actividad_evento', actividad_eventoController.mostrar);
Route.post('/actividad_evento', actividad_eventoController.guardar);
Route.get('/actividad_evento/:id', actividad_eventoController.mostrarId);
Route.put('/actividad_evento/:id', actividad_eventoController.actualizar);
Route.delete('/actividad_evento/:id', actividad_eventoController.eliminar);

Route.get('/foto', fotoController.mostrar);
Route.post('/foto', fotoController.guardar);
Route.get('/foto/:id', fotoController.mostrarId);
Route.put('/foto/:id', fotoController.actualizar);
Route.delete('/foto/:id', fotoController.eliminar);

Route.get('/certificado', certificadoController.mostrar);
Route.post('/certificado', certificadoController.guardar);
Route.get('/certificado/:id', certificadoController.mostrarId);
Route.put('/certificado/:id', certificadoController.actualizar);
Route.delete('/certificado/:id', certificadoController.eliminar);

Route.get('/actividad_evento_has_expositor', actividad_evento_has_expositorController.mostrar);
Route.post('/actividad_evento_has_expositor', actividad_evento_has_expositorController.guardar);
Route.get('/actividad_evento_has_expositor/:id', actividad_evento_has_expositorController.mostrarId);
Route.put('/actividad_evento_has_expositor/:id', actividad_evento_has_expositorController.actualizar);
Route.delete('/actividad_evento_has_expositor/:id', actividad_evento_has_expositorController.eliminar);

Route.get('/actividad_evento_solicita_ambiente', actividad_evento_solicita_ambienteController.mostrar);
Route.post('/actividad_evento_solicita_ambiente', actividad_evento_solicita_ambienteController.guardar);
Route.get('/actividad_evento_solicita_ambiente/:id', actividad_evento_solicita_ambienteController.mostrarId);
Route.put('/actividad_evento_solicita_ambiente/:id', actividad_evento_solicita_ambienteController.actualizar);
Route.delete('/actividad_evento_solicita_ambiente/:id', actividad_evento_solicita_ambienteController.eliminar);

Route.get('/usuario_se_inscribe_evento', usuario_se_inscribe_eventoController.mostrar);
Route.post('/usuario_se_inscribe_evento', usuario_se_inscribe_eventoController.guardar);
Route.get('/usuario_se_inscribe_evento/:id', usuario_se_inscribe_eventoController.mostrarId);
Route.put('/usuario_se_inscribe_evento/:id', usuario_se_inscribe_eventoController.actualizar);
Route.delete('/usuario_se_inscribe_evento/:id', usuario_se_inscribe_eventoController.eliminar);

Route.get('/usuario_califica_evento', usuario_califica_eventoController.mostrar);
Route.post('/usuario_califica_evento', usuario_califica_eventoController.guardar);
Route.get('/usuario_califica_evento/:id', usuario_califica_eventoController.mostrarId);
Route.put('/usuario_califica_evento/:id', usuario_califica_eventoController.actualizar);
Route.delete('/usuario_califica_evento/:id', usuario_califica_eventoController.eliminar);

Route.get('/usuario_reserva_participacion_evento', usuario_reserva_participacion_eventoController.mostrar);
Route.post('/usuario_reserva_participacion_evento', usuario_reserva_participacion_eventoController.guardar);
Route.get('/usuario_reserva_participacion_evento/:id', usuario_reserva_participacion_eventoController.mostrarId);
Route.put('/usuario_reserva_participacion_evento/:id', usuario_reserva_participacion_eventoController.actualizar);
Route.delete('/usuario_reserva_participacion_evento/:id', usuario_reserva_participacion_eventoController.eliminar);

Route.get('/usuario_comenta_evento', usuario_comenta_eventoController.mostrar);
Route.post('/usuario_comenta_evento', usuario_comenta_eventoController.guardar);
Route.get('/usuario_comenta_evento/:id', usuario_comenta_eventoController.mostrarId);
Route.put('/usuario_comenta_evento/:id', usuario_comenta_eventoController.actualizar);
Route.delete('/usuario_comenta_evento/:id', usuario_comenta_eventoController.eliminar);

Route.get('/usuario_comenta_actividad_evento', usuario_comenta_actividad_eventoController.mostrar);
Route.post('/usuario_comenta_actividad_evento', usuario_comenta_actividad_eventoController.guardar);
Route.get('/usuario_comenta_actividad_evento/:id', usuario_comenta_actividad_eventoController.mostrarId);
Route.put('/usuario_comenta_actividad_evento/:id', usuario_comenta_actividad_eventoController.actualizar);
Route.delete('/usuario_comenta_actividad_evento/:id', usuario_comenta_actividad_eventoController.eliminar);

Route.get('/usuario_asiste_actividad_evento', usuario_asiste_actividad_eventoController.mostrar);
Route.post('/usuario_asiste_actividad_evento', usuario_asiste_actividad_eventoController.guardar);
Route.get('/usuario_asiste_actividad_evento/:id', usuario_asiste_actividad_eventoController.mostrarId);
Route.put('/usuario_asiste_actividad_evento/:id', usuario_asiste_actividad_eventoController.actualizar);
Route.delete('/usuario_asiste_actividad_evento/:id', usuario_asiste_actividad_eventoController.eliminar);
