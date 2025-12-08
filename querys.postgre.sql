-- Borrar todas las tablas si existen
DROP TABLE IF EXISTS favoritos CASCADE;
DROP TABLE IF EXISTS usuarios CASCADE;
DROP TABLE IF EXISTS peliculas CASCADE;
DROP TABLE IF EXISTS rol CASCADE;

CREATE TABLE peliculas (
    id_peliculas SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    director VARCHAR(150),
    anio INT,
    duracion_en_min INT,
    genero VARCHAR(150),
    imagen_url VARCHAR(255),
    sinopsis VARCHAR(600) NOT NULL
);

CREATE TABLE rol (
    id_rol SERIAL PRIMARY KEY,
    rol VARCHAR(50) NOT NULL
);
INSERT INTO rol (rol) VALUES ('usuario') RETURNING *;
INSERT INTO rol (rol) VALUES ('admin') RETURNING *;

CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    contrasenia VARCHAR(250) NOT NULL,
	id_rol INT REFERENCES rol(id_rol)
);


CREATE TABLE favoritos (
    id_favoritos SERIAL PRIMARY KEY,
    id_peliculas INT REFERENCES peliculas(id_peliculas),
    id_usuario INT REFERENCES usuarios(id_usuario)
);
INSERT INTO favoritos (id_peliculas, id_usuario) VALUES (5, 2) RETURNING *;
INSERT INTO favoritos (id_peliculas, id_usuario) VALUES (6, 3) RETURNING *;
INSERT INTO favoritos (id_peliculas, id_usuario) VALUES (6, 7) RETURNING *;
INSERT INTO favoritos (id_peliculas, id_usuario) VALUES (5, 7) RETURNING *;

SELECT * FROM favoritos;
SELECT * FROM usuarios;
SELECT * FROM peliculas;

--DELETE FROM favoritos
--DELETE FROM usuarios