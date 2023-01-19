DROP TABLE IF EXISTS "movies"; 
DROP TABLE IF EXISTS "series";
DROP TABLE IF EXISTS "genres";
DROP TABLE IF EXISTS "users";




CREATE TABLE IF NOT EXISTS "movies"(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(50) NOT NULL,
    "date" DATE NOT NULL,
    "description" VARCHAR(400) NOT NULL,
    "picture" VARCHAR(500),
    "video" VARCHAR(500)
   
);


CREATE TABLE IF NOT EXISTS "series"(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(50) NOT NULL,
    "date" DATE NOT NULL,
    "description" VARCHAR(400) NOT NULL,
    "picture" VARCHAR(500),
    "video" VARCHAR(500)
      
);


CREATE TABLE IF NOT EXISTS "users"(
    "id" SERIAL PRIMARY KEY,
    "email" VARCHAR(250),
    "password" VARCHAR(50)
      
);


CREATE TABLE IF NOT EXISTS "genres"(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50)
);


CREATE TABLE IF NOT EXISTS "movies_genres"(
    "movie_id" INT NOT NULL,
    "genre_id" INT NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES movies (id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (genre_id) REFERENCES genres (id) ON DELETE RESTRICT ON UPDATE CASCADE,
    PRIMARY KEY (movie_id, genre_id)
);


CREATE TABLE IF NOT EXISTS "series_genres"(
    "serie_id" INT NOT NULL,
    "genre_id" INT NOT NULL,
    FOREIGN KEY (serie_id) REFERENCES series (id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (genre_id) REFERENCES genres (id) ON DELETE RESTRICT ON UPDATE CASCADE,
    PRIMARY KEY (serie_id, genre_id)
);


