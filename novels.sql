create database l_novels;

-- create user 'novelsUser'@'%' IDENTIFIED WITH mysql_native_password by 'novels1234!';
create user if not exists 'novelsUser'@'%' IDENTIFIED WITH mysql_native_password by 'novels1234!';

grant all on l_novels.* TO 'novelsUser'@'%';

USE l_novels;

CREATE TABLE authors (
    id INT auto_increment,
    nameFirst VARCHAR(255),
    nameLast VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
);

CREATE TABLE novels (
    id INT auto_increment,
    title VARCHAR(255),
    authorId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id),
    FOREIGN KEY(authorId) REFERENCES authors(id)
);

CREATE TABLE genres (
    id INT auto_increment,
    name VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
);

CREATE TABLE novelsGenres (
    genreId INT,
    novelId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(genreId, novelId),
    FOREIGN KEY(genreId) REFERENCES genres(id),
    FOREIGN KEY(novelId) REFERENCES novels(id)
);

INSERT INTO authors (nameFirst, nameLast) VALUES ('Bram', 'Stoker');
INSERT INTO authors (nameFirst, nameLast) VALUES ('Oscar', 'Wilde');
INSERT INTO authors (nameFirst, nameLast) VALUES ('Alice', 'Walker');
INSERT INTO authors (nameFirst, nameLast) VALUES ('Leo', 'Tolstoy');
INSERT INTO authors (nameFirst, nameLast) VALUES ('Charles', 'Dickens');
INSERT INTO authors (nameFirst, nameLast) VALUES ('Arthur', 'Miller');
INSERT INTO authors (nameFirst, nameLast) VALUES ('Alexandre', 'Dumas');
INSERT INTO authors (nameFirst, nameLast) VALUES ('Arthur', 'Conan Doyle');
INSERT INTO authors (nameFirst, nameLast) VALUES ('Robert', 'Louis Stevenson');
INSERT INTO authors (nameFirst, nameLast) VALUES ('Fyodor', 'Dostoyevsky');
INSERT INTO authors (nameFirst, nameLast) VALUES ('Agatha', 'Christie');
INSERT INTO authors (nameFirst, nameLast) VALUES ('Ray', 'Bradbury');
INSERT INTO authors (nameFirst, nameLast) VALUES ('George', 'Orwell');
INSERT INTO authors (nameFirst, nameLast) VALUES ('H.G.', 'Wells');
INSERT INTO authors (nameFirst, nameLast) VALUES ('Chinua', 'Achebe');

INSERT INTO novels (title, authorId) VALUES ('Dracula', 1);
INSERT INTO novels (title, authorId) VALUES ('The Picture of Dorian Gray', 2);
INSERT INTO novels (title, authorId) VALUES ('The Color Purple', 3);
INSERT INTO novels (title, authorId) VALUES ('War and Peace', 4);
INSERT INTO novels (title, authorId) VALUES ('A Tale of Two Cities', 5);
INSERT INTO novels (title, authorId) VALUES ('The Crucible', 6);
INSERT INTO novels (title, authorId) VALUES ('The Three Musketeers', 7);
INSERT INTO novels (title, authorId) VALUES ('The Hound of the Baskervilles', 8);
INSERT INTO novels (title, authorId) VALUES ('The Strange Case of Dr. Jekyll and Mr. Hyde', 9);
INSERT INTO novels (title, authorId) VALUES ('Crime and Punishment', 10);
INSERT INTO novels (title, authorId) VALUES ('Murder on the Orient Express', 11);
INSERT INTO novels (title, authorId) VALUES ('Fahrenheit 451', 12);
INSERT INTO novels (title, authorId) VALUES ('Animal Farm', 13);
INSERT INTO novels (title, authorId) VALUES ('The Time Machine', 14);
INSERT INTO novels (title, authorId) VALUES ('Things Fall Apart', 15);

INSERT INTO genres (name) VALUES ('Adventure');
INSERT INTO genres (name) VALUES ('African Literature');
INSERT INTO genres (name) VALUES ('Crime');
INSERT INTO genres (name) VALUES ('Drama');
INSERT INTO genres (name) VALUES ('Dystopia');
INSERT INTO genres (name) VALUES ('Fantasy');
INSERT INTO genres (name) VALUES ('Fiction');
INSERT INTO genres (name) VALUES ('French Literature');
INSERT INTO genres (name) VALUES ('Gothic');
INSERT INTO genres (name) VALUES ('Historical Fiction');
INSERT INTO genres (name) VALUES ('Horror');
INSERT INTO genres (name) VALUES ('Mystery');
INSERT INTO genres (name) VALUES ('Plays');
INSERT INTO genres (name) VALUES ('Russian Literature');
INSERT INTO genres (name) VALUES ('Science Fiction');
INSERT INTO genres (name) VALUES ('Time Travel');
INSERT INTO genres (name) VALUES ('Thriller');
INSERT INTO genres (name) VALUES ('War');

INSERT INTO novelsGenres (genreId, novelId) VALUES (1, 7);
INSERT INTO novelsGenres (genreId, novelId) VALUES (2, 15);
INSERT INTO novelsGenres (genreId, novelId) VALUES (3, 8);
INSERT INTO novelsGenres (genreId, novelId) VALUES (4, 6);
INSERT INTO novelsGenres (genreId, novelId) VALUES (5, 12);
INSERT INTO novelsGenres (genreId, novelId) VALUES (5, 13);
INSERT INTO novelsGenres (genreId, novelId) VALUES (6, 1);
INSERT INTO novelsGenres (genreId, novelId) VALUES (6, 2);
INSERT INTO novelsGenres (genreId, novelId) VALUES (7, 1);
INSERT INTO novelsGenres (genreId, novelId) VALUES (7, 2);
INSERT INTO novelsGenres (genreId, novelId) VALUES (7, 3);
INSERT INTO novelsGenres (genreId, novelId) VALUES (7, 4);
INSERT INTO novelsGenres (genreId, novelId) VALUES (7, 5);
INSERT INTO novelsGenres (genreId, novelId) VALUES (7, 6);
INSERT INTO novelsGenres (genreId, novelId) VALUES (7, 7);
INSERT INTO novelsGenres (genreId, novelId) VALUES (7, 8);
INSERT INTO novelsGenres (genreId, novelId) VALUES (7, 9);
INSERT INTO novelsGenres (genreId, novelId) VALUES (7, 10);
INSERT INTO novelsGenres (genreId, novelId) VALUES (7, 11);
INSERT INTO novelsGenres (genreId, novelId) VALUES (7, 12);
INSERT INTO novelsGenres (genreId, novelId) VALUES (7, 13);
INSERT INTO novelsGenres (genreId, novelId) VALUES (7, 14);
INSERT INTO novelsGenres (genreId, novelId) VALUES (7, 15);
INSERT INTO novelsGenres (genreId, novelId) VALUES (8, 7);
INSERT INTO novelsGenres (genreId, novelId) VALUES (9, 2);
INSERT INTO novelsGenres (genreId, novelId) VALUES (10, 3);
INSERT INTO novelsGenres (genreId, novelId) VALUES (10, 4);
INSERT INTO novelsGenres (genreId, novelId) VALUES (10, 5);
INSERT INTO novelsGenres (genreId, novelId) VALUES (10, 6);
INSERT INTO novelsGenres (genreId, novelId) VALUES (10, 7);
INSERT INTO novelsGenres (genreId, novelId) VALUES (10, 15);
INSERT INTO novelsGenres (genreId, novelId) VALUES (11, 1);
INSERT INTO novelsGenres (genreId, novelId) VALUES (11, 2);
INSERT INTO novelsGenres (genreId, novelId) VALUES (12, 8);
INSERT INTO novelsGenres (genreId, novelId) VALUES (12, 9);
INSERT INTO novelsGenres (genreId, novelId) VALUES (12, 10);
INSERT INTO novelsGenres (genreId, novelId) VALUES (12, 11);
INSERT INTO novelsGenres (genreId, novelId) VALUES (13, 6);
INSERT INTO novelsGenres (genreId, novelId) VALUES (14, 4);
INSERT INTO novelsGenres (genreId, novelId) VALUES (14, 10);
INSERT INTO novelsGenres (genreId, novelId) VALUES (15, 9);
INSERT INTO novelsGenres (genreId, novelId) VALUES (15, 12);
INSERT INTO novelsGenres (genreId, novelId) VALUES (15, 13);
INSERT INTO novelsGenres (genreId, novelId) VALUES (15, 14);
INSERT INTO novelsGenres (genreId, novelId) VALUES (16, 14);
INSERT INTO novelsGenres (genreId, novelId) VALUES (17, 8);
INSERT INTO novelsGenres (genreId, novelId) VALUES (18, 4);