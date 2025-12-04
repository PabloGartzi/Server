# Movie App – Backend  
Bootcamp Fullstack FT Vitoria · The Bridge · Abril 2025

Este repositorio contiene la parte Backend del proyecto intermedio **Movie App**, una aplicación web para búsqueda, consulta y gestión de películas con control de acceso para **Usuarios** y **Administradores**.

---

## Objetivo del proyecto

Construir la capa de servidor que gestione:

- Login, registro y cierre de sesión mediante JWT y OAuth.  
- Control de roles (Usuario y Administrador) y protección de rutas.  
- CRUD completo de películas y su almacenamiento en base de datos.  
- Asociación de películas favoritas a los Usuarios.  
- Gestión de recuperación y restauración de contraseñas mediante enlace con JWT.  
- Exposición de los endpoints necesarios para el Frontend.  

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/PabloGartzi/Server.git
```
2. Accede al directorio del proyecto desde el CMD o consola de tu ordenador:
```
cd Server
```
3. Instala las dependencias:
```
npm install
```
4. Crea un archivo .env a partir del .env.template:
5. Configura las variables de entorno necesarias en el archivo .env

## Tecnologías utilizadas

### Núcleo
- Node.js  
- Express.js  


### Herramientas de desarrollo
- Git y GitHub  
- Nodemon  
- Postman para pruebas de endpoints
- Multer para subida de imágenes

### Documentación de la api con swagger

1. Instalamos dependencia: 
npm install swagger-ui-express swagger-jsdoc --save

http://localhost/4001/api-docs/#/



