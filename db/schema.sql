CREATE DATABASE songs_db;

CREATE TABLE songs (
    id INT auto_increment,
    artist VARCHAR(100),
    title VARCHAR(100),
    genre VARCHAR(100),
    year INT, 
    createdAT DATE,
    updateAT DATE,
    PRIMARY KEY(id)
);