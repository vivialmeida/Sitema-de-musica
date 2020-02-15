-- Drop table

-- DROP TABLE emusic.artista;

CREATE TABLE emusic.artista (
	id int4 NOT NULL,
	nome varchar(50) NOT NULL,
	nacionalidade varchar(50) NOT NULL,
	CONSTRAINT artista_pkey PRIMARY KEY (id)
);

-- Drop table

-- DROP TABLE emusic.musica;

CREATE TABLE emusic.musica (
	id int4 NOT NULL,
	nome varchar(100) NOT NULL,
	faixa int4 NULL,
	ano int4 NULL,
	genero varchar(50) NULL,
	duracao float4 NOT NULL,
	artista_id int4 NULL,
	CONSTRAINT musica_pkey PRIMARY KEY (id)
);

-- Drop table

-- DROP TABLE emusic.album;

CREATE TABLE emusic.album (
	id int4 NOT NULL,
	musica_id int4 NOT NULL,
	artista_id int4 NOT NULL,
	nome varchar(100) NOT NULL,
	ano int4 NOT NULL,
	genero varchar(50) NULL,
	descricao text NULL,
	duracao float4 NOT NULL,
	CONSTRAINT album_pkey PRIMARY KEY (id)
);

ALTER TABLE emusic.album ADD CONSTRAINT album_artista_fk_1 FOREIGN KEY (artista_id) REFERENCES emusic.artista(id);
ALTER TABLE emusic.album ADD CONSTRAINT album_musica_fk FOREIGN KEY (musica_id) REFERENCES emusic.musica(id);


-- Drop table

-- DROP TABLE emusic.album_musica;

CREATE TABLE emusic.album_musica (
	album_id int4 NOT NULL,
	album_musica_id int4 NOT NULL,
	musica_id int4 NOT NULL,
	CONSTRAINT album_musica_pkey PRIMARY KEY (album_musica_id)
);

ALTER TABLE emusic.album_musica ADD CONSTRAINT album_musica_album_fk FOREIGN KEY (album_id) REFERENCES emusic.album(id);
ALTER TABLE emusic.album_musica ADD CONSTRAINT album_musica_musica_fk FOREIGN KEY (musica_id) REFERENCES emusic.musica(id);


-- Drop table

-- DROP TABLE emusic.artista_musica;

CREATE TABLE emusic.artista_musica (
	artista_musica_id int4 NOT NULL,
	artista_id int4 NOT NULL,
	musica_id int4 NOT NULL,
	CONSTRAINT artista_musica_pkey PRIMARY KEY (artista_musica_id)
);

ALTER TABLE emusic.artista_musica ADD CONSTRAINT artista_musica_artista_fk FOREIGN KEY (artista_id) REFERENCES emusic.artista(id);
ALTER TABLE emusic.artista_musica ADD CONSTRAINT artista_musica_musica_fk FOREIGN KEY (musica_id) REFERENCES emusic.musica(id);