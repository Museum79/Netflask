DROP TABLE IF EXISTS "videos"; 
DROP TABLE IF EXISTS "genres";
DROP TABLE IF EXISTS "users";
DROP TABLE IF EXISTS "videos_genres";



CREATE TABLE IF NOT EXISTS "videos"(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(50) NOT NULL,
    "date" DATE NOT NULL,
    "description" VARCHAR(400) NOT NULL,
    "picture" VARCHAR(500),
    "video" VARCHAR(500),
    "category" VARCHAR(50)
      
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


CREATE TABLE IF NOT EXISTS "videos_genres"(
    "movie_id" INT NOT NULL,
    "genre_id" INT NOT NULL,
    FOREIGN KEY (video_id) REFERENCES videos (id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (genre_id) REFERENCES genres (id) ON DELETE RESTRICT ON UPDATE CASCADE,
    PRIMARY KEY (video_id, genre_id)
);




