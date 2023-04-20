# Documentación Proyecto

### Persona *
npx sequelize-cli model:generate --name Persona --attributes nombre:string,paterno:string,materno:string,fecha_nac:date,sexo:string

### Usuario *
npx sequelize-cli model:generate --name Usuario --attributes nom_usuario:string,contrasenia:string,correo:string,foto:string,tipoFoto:string,PersonaId:integer


### Rol * 
npx sequelize-cli model:generate --name Rol --attributes descripcion:string

### UsuarioTieneRol *
npx sequelize-cli model:generate --name Usuario_Tiene_Rol --attributes RolId:integer,UsuarioId:integer 

### Expositor *
npx sequelize-cli model:generate --name Expositor --attributes experiencia_academica:string,UsuarioId:integer 



### Material_De_Actividad *
npx sequelize-cli model:generate --name Material_De_Actividad --attributes nombre_archivo:string,tipo_archivo:string,prioridad:integer,ExpositorId:integer


### Institucion *
npx sequelize-cli model:generate --name Institucion --attributes nombre_institucion:string,ubicacion:string,logo:string,celular:string,correo:string

### Objetivo *
npx sequelize-cli model:generate --name Objetivo --attributes descripcion:string,EventoId:integer


### Evento *
npx sequelize-cli model:generate --name Evento --attributes nombre_Evento:string,fecha_ini:date,fecha_fin:date,logo:string,InstitucionId:integer


### Recurso *
npx sequelize-cli model:generate --name Recurso --attributes tipo_recurso:string,cantidad:integer,estado:string,AmbienteId:integer

### Ambiente *
npx sequelize-cli model:generate --name Ambiente --attributes tipo_ambiente:string,area_ambiente:decimal,direccion_ambiente:string,estado:string,InstitucionId:integer

### Categoria *
npx sequelize-cli model:generate --name Categoria --attributes descripcion:string

### Actividad_Evento *
npx sequelize-cli model:generate --name Actividad_Evento --attributes fecha:date,horario:time,nombre:string,CategoriaId:integer,EventoId:integer


### Foto *
npx sequelize-cli model:generate --name Foto --attributes nombre:string,Actividad_EventoId:integer,AmbienteId:integer,tipoFoto:string


### Certificado *
npx sequelize-cli model:generate --name Certificado --attributes titulo:string,fecha_entrega:date,carga_horaria:integer,UsuarioId:integer,EventoId:integer,Actividad_EventoId:integer


### Actividad_Evento_Has_Expositor *
npx sequelize-cli model:generate --name Actividad_Evento_Has_Expositor --attributes Actividad_EventoId:integer,ExpositorId:integer

### Actividad_Evento_Solicita_Ambiente *
npx sequelize-cli model:generate --name Actividad_Evento_Solicita_Ambiente --attributes Actividad_EventoId:integer,AmbienteId:integer

### Usuario_Se_Inscribe_Evento *
npx sequelize-cli model:generate --name Usuario_Se_Inscribe_Evento --attributes UsuarioId:integer,EventoId:integer,fecha_hora:date


### Usuario_Califica_Evento * 
npx sequelize-cli model:generate --name Usuario_Califica_Evento --attributes UsuarioId:integer,EventoId:integer,puntuacion:integer


### Usuario_Reserva_Participacion_Evento *
npx sequelize-cli model:generate --name Usuario_Reserva_Participacion_Evento --attributes UsuarioId:integer,EventoId:integer,fecha_hora:date


### Usuario_Comenta_Evento *
npx sequelize-cli model:generate --name Usuario_Comenta_Evento --attributes UsuarioId:integer,EventoId:integer,descripcion:string,fecha_hora:date

### Usuario_Comenta_Actividad_Evento *
npx sequelize-cli model:generate --name Usuario_Comenta_Actividad_Evento --attributes UsuarioId:integer,Actividad_EventoId:integer,descripcion:string,fecha_hora:date


### Usuario_Asiste_Actividad_Evento *
npx sequelize-cli model:generate --name Usuario_Asiste_Actividad_Evento --attributes UsuarioId:integer,Actividad_EventoId:integer



# Orden de migración
# para enviar correos instalar

npm i nodemailer



pass: SoyProgramadorCompetitivo












### data base
npx sequelize-auto -o "./src/modelos_auto" -d mydb -h localhost -u root -p 3306  -e mysql





## Direccion
cambiar a D:

cd D:\OSVALDO\MI CARRERA\INFORMATICA\8 SEMESTRE\INF - 281\2023\PROYECTO SISTEMAS ACADEMICOS\backendNode


## Relations 1:1

## Relations 1:N
Paciente -> Tiene <- Medico
       1             1 (1 Paciente tiene 1 Medico)
       N             1 (1 Medico tiene N Paciente)
Car:   N      :      1

Medico.hasMany(models.Paciente, {
       foreignKey: 'id_medico'
})
Paciente.belongsTo(models.Medico, {
       foreignKey: 'id'
});

## Relations N:M