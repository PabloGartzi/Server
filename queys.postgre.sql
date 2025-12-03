CREATE TABLE Directores (
    id_director SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);
INSERT INTO Directores (nombre) VALUES ('Guillermo Del Toro') RETURNING *;
INSERT INTO Directores (nombre) VALUES ('James Cameron') RETURNING *;
SELECT * FROM Directores


CREATE TABLE Generos (
    id_genero SERIAL PRIMARY KEY,
    genero VARCHAR(50) NOT NULL
);
INSERT INTO Generos (genero) VALUES ('Comedia') RETURNING *;
INSERT INTO Generos (genero) VALUES ('Ciencia Ficción') RETURNING *;
SELECT * FROM Generos


CREATE TABLE Peliculas (
    id_peliculas SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    id_director INT REFERENCES Directores(id_director),
    anio INT,
    duracion_en_min INT,
    id_genero INT REFERENCES Generos(id_genero),
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
    id_peliculas INT REFERENCES Peliculas(id_peliculas),
    id_usuario INT REFERENCES usuarios(id_usuario)
);
INSERT INTO favoritos (id_peliculas, id_usuario) VALUES (5, 2) RETURNING *;
INSERT INTO favoritos (id_peliculas, id_usuario) VALUES (6, 3) RETURNING *;
INSERT INTO favoritos (id_peliculas, id_usuario) VALUES (6, 6) RETURNING *;
INSERT INTO favoritos (id_peliculas, id_usuario) VALUES (5, 6) RETURNING *;


SELECT * FROM favoritos
SELECT * FROM usuarios
SELECT * FROM peliculas