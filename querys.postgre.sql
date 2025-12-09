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

-- 1. Clásico de Ciencia Ficción
INSERT INTO peliculas (titulo, imagen_url, anio, director, genero, duracion_en_min, sinopsis) 
VALUES (
    '2001: Una odisea del espacio', 
    'https://ejemplo.com/2001_odisea.jpg', 
    1968, 
    'Stanley Kubrick', 
    'Ciencia Ficción', 
    149, 
    'Una epopeya sobre la evolución humana, la tecnología, la inteligencia artificial y la existencia de vida extraterrestre.'
);

-- 2. Drama de Supervivencia
INSERT INTO peliculas (titulo, imagen_url, anio, director, genero, duracion_en_min, sinopsis) 
VALUES (
    'El Renacido', 
    'https://ejemplo.com/renacido.jpg', 
    2015, 
    'Alejandro G. Iñárritu', 
    'Drama / Supervivencia', 
    156, 
    'Un explorador es atacado por un oso y dado por muerto por su grupo. Debe usar su voluntad para sobrevivir.'
);

-- 3. Película de Animación (Éxito Comercial)
INSERT INTO peliculas (titulo, imagen_url, anio, director, genero, duracion_en_min, sinopsis) 
VALUES (
    'El Viaje de Chihiro', 
    'https://ejemplo.com/chihiro.jpg', 
    2001, 
    'Hayao Miyazaki', 
    'Animación / Fantasía', 
    125, 
    'Una niña se adentra en un mundo mágico y debe trabajar en una casa de baños para salvar a sus padres, transformados en cerdos.'
);

-- 4. Thriller Psicológico
INSERT INTO peliculas (titulo, imagen_url, anio, director, genero, duracion_en_min, sinopsis) 
VALUES (
    'El Silencio de los Corderos', 
    'https://ejemplo.com/corderos.jpg', 
    1991, 
    'Jonathan Demme', 
    'Thriller / Terror', 
    118, 
    'Una joven agente del FBI debe consultar a un brillante pero peligroso caníbal encarcelado para atrapar a un asesino en serie.'
);

-- 5. Comedia de Culto
INSERT INTO peliculas (titulo, imagen_url, anio, director, genero, duracion_en_min, sinopsis) 
VALUES (
    'El Gran Lebowski', 
    'https://ejemplo.com/lebowski.jpg', 
    1998, 
    'Joel y Ethan Coen', 
    'Comedia', 
    117, 
    'Un holgazán es confundido con un millonario y se ve envuelto en una trama de secuestro y caos en Los Ángeles.'
);

-- 6. Drama Histórico
INSERT INTO peliculas (titulo, imagen_url, anio, director, genero, duracion_en_min, sinopsis) 
VALUES (
    'La Lista de Schindler', 
    'https://ejemplo.com/schindler.jpg', 
    1993, 
    'Steven Spielberg', 
    'Drama Histórico', 
    195, 
    'Un empresario alemán salva la vida de más de mil refugiados judíos durante el Holocausto nazi.'
);

-- 7. Cine Negro
INSERT INTO peliculas (titulo, imagen_url, anio, director, genero, duracion_en_min, sinopsis) 
VALUES (
    'Perdición', 
    'https://ejemplo.com/perdicion.jpg', 
    1944, 
    'Billy Wilder', 
    'Cine Negro', 
    107, 
    'Un vendedor de seguros es seducido por una mujer fatal para asesinar a su esposo y cobrar el seguro de vida.'
);

-- 8. Fantasía Épica
INSERT INTO peliculas (titulo, imagen_url, anio, director, genero, duracion_en_min, sinopsis) 
VALUES (
    'El Señor de los Anillos: La Comunidad del Anillo', 
    'https://ejemplo.com/comunidad.jpg', 
    2001, 
    'Peter Jackson', 
    'Fantasía Épica', 
    178, 
    'Un joven hobbit hereda un poderoso anillo y debe emprender un peligroso viaje para destruirlo en la tierra donde fue forjado.'
);

-- 9. Película de Superhéroes (Moderna)
INSERT INTO peliculas (titulo, imagen_url, anio, director, genero, duracion_en_min, sinopsis) 
VALUES (
    'El Caballero Oscuro', 
    'https://ejemplo.com/oscuro.jpg', 
    2008, 
    'Christopher Nolan', 
    'Acción / Superhéroes', 
    152, 
    'Batman se enfrenta a un nuevo y caótico criminal conocido como el Joker, quien busca sumir Gotham en la anarquía.'
);

-- 10. Ciencia Ficción con Viajes en el Tiempo
INSERT INTO peliculas (titulo, imagen_url, anio, director, genero, duracion_en_min, sinopsis) 
VALUES (
    'Regreso al Futuro', 
    'https://ejemplo.com/futuro.jpg', 
    1985, 
    'Robert Zemeckis', 
    'Ciencia Ficción / Comedia', 
    116, 
    'Un adolescente viaja accidentalmente al pasado en una máquina del tiempo y debe asegurarse de que sus padres se enamoren.'
);

-- 11. Película Reciente (Cumple con año <= 2028)
INSERT INTO peliculas (titulo, imagen_url, anio, director, genero, duracion_en_min, sinopsis) 
VALUES (
    'Dune', 
    'https://ejemplo.com/dune.jpg', 
    2021, 
    'Denis Villeneuve', 
    'Ciencia Ficción / Aventura', 
    155, 
    'La historia de Paul Atreides, un joven brillante cuyo destino lo lleva a un planeta peligroso y vital para la supervivencia galáctica.'
);

-- 12. Terror Gótico
INSERT INTO peliculas (titulo, imagen_url, anio, director, genero, duracion_en_min, sinopsis) 
VALUES (
    'Psicosis', 
    'https://ejemplo.com/psicosis.jpg', 
    1960, 
    'Alfred Hitchcock', 
    'Terror / Thriller', 
    109, 
    'Una secretaria roba dinero y se hospeda en un motel regentado por un joven bajo el dominio de su madre controladora.'
);

-- 13. Western
INSERT INTO peliculas (titulo, imagen_url, anio, director, genero, duracion_en_min, sinopsis) 
VALUES (
    'El Bueno, el Malo y el Feo', 
    'https://ejemplo.com/oeste.jpg', 
    1966, 
    'Sergio Leone', 
    'Western', 
    161, 
    'Tres hombres se persiguen en busca de un tesoro de oro enterrado en medio del caos de la Guerra Civil Americana.'
);

-- 14. Cine de Autor (Bajo presupuesto)
INSERT INTO peliculas (titulo, imagen_url, anio, director, genero, duracion_en_min, sinopsis) 
VALUES (
    'Tiempos Violentos (Pulp Fiction)', 
    'https://ejemplo.com/pulp.jpg', 
    1994, 
    'Quentin Tarantino', 
    'Crimen / Neo-Noir', 
    154, 
    'Las vidas de dos sicarios, un boxeador y una pareja de atracadores se entrelazan en cuatro historias de violencia y redención.'
);

-- 15. Documental/Falso Documental
INSERT INTO peliculas (titulo, imagen_url, anio, director, genero, duracion_en_min, sinopsis) 
VALUES (
    'Apolo 13', 
    'https://ejemplo.com/apolo.jpg', 
    1995, 
    'Ron Howard', 
    'Drama / Histórico', 
    140, 
    'La misión de la NASA Apollo 13 sufre una explosión a bordo que pone en peligro la vida de los tres astronautas.'
);