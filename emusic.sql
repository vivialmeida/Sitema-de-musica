PGDMP     
    2                  x            postgres    12.1    12.1     %           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            &           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            '           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            (           1262    13318    postgres    DATABASE     �   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Portuguese_Brazil.1252' LC_CTYPE = 'Portuguese_Brazil.1252';
    DROP DATABASE postgres;
                postgres    false            )           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    2856                        2615    16393    emusic    SCHEMA        CREATE SCHEMA emusic;
    DROP SCHEMA emusic;
                postgres    false            �            1259    16400    album    TABLE     �   CREATE TABLE emusic.album (
    album_id integer NOT NULL,
    musica_id integer NOT NULL,
    artista_id integer NOT NULL,
    ano integer NOT NULL,
    genero character varying(50),
    descricao text,
    duracao real NOT NULL
);
    DROP TABLE emusic.album;
       emusic         heap    postgres    false    7            �            1259    16403    album_musica    TABLE     �   CREATE TABLE emusic.album_musica (
    album_id integer NOT NULL,
    album_musica_id integer NOT NULL,
    musica_id integer NOT NULL
);
     DROP TABLE emusic.album_musica;
       emusic         heap    postgres    false    7            �            1259    16397    artista    TABLE     �   CREATE TABLE emusic.artista (
    artista_id integer NOT NULL,
    nome character varying(50) NOT NULL,
    nacionalidade character varying(50) NOT NULL
);
    DROP TABLE emusic.artista;
       emusic         heap    postgres    false    7            �            1259    16412    artista_musica    TABLE     �   CREATE TABLE emusic.artista_musica (
    artista_musica_id integer NOT NULL,
    artista_id integer NOT NULL,
    musica_id integer NOT NULL
);
 "   DROP TABLE emusic.artista_musica;
       emusic         heap    postgres    false    7            �            1259    16394    musica    TABLE     �   CREATE TABLE emusic.musica (
    musica_id integer NOT NULL,
    nome character varying(100) NOT NULL,
    ano integer,
    genero character varying(50),
    duracao real NOT NULL,
    artista_id integer
);
    DROP TABLE emusic.musica;
       emusic         heap    postgres    false    7                       0    16400    album 
   TABLE DATA           a   COPY emusic.album (album_id, musica_id, artista_id, ano, genero, descricao, duracao) FROM stdin;
    emusic          postgres    false    206   z       !          0    16403    album_musica 
   TABLE DATA           L   COPY emusic.album_musica (album_id, album_musica_id, musica_id) FROM stdin;
    emusic          postgres    false    207   �                 0    16397    artista 
   TABLE DATA           B   COPY emusic.artista (artista_id, nome, nacionalidade) FROM stdin;
    emusic          postgres    false    205   �       "          0    16412    artista_musica 
   TABLE DATA           R   COPY emusic.artista_musica (artista_musica_id, artista_id, musica_id) FROM stdin;
    emusic          postgres    false    208                     0    16394    musica 
   TABLE DATA           S   COPY emusic.musica (musica_id, nome, ano, genero, duracao, artista_id) FROM stdin;
    emusic          postgres    false    204   7        �
           2606    16418    album_musica album_musica_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY emusic.album_musica
    ADD CONSTRAINT album_musica_pkey PRIMARY KEY (album_musica_id);
 H   ALTER TABLE ONLY emusic.album_musica DROP CONSTRAINT album_musica_pkey;
       emusic            postgres    false    207            �
           2606    16407    album album_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY emusic.album
    ADD CONSTRAINT album_pkey PRIMARY KEY (album_id);
 :   ALTER TABLE ONLY emusic.album DROP CONSTRAINT album_pkey;
       emusic            postgres    false    206            �
           2606    16416 "   artista_musica artista_musica_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY emusic.artista_musica
    ADD CONSTRAINT artista_musica_pkey PRIMARY KEY (artista_musica_id);
 L   ALTER TABLE ONLY emusic.artista_musica DROP CONSTRAINT artista_musica_pkey;
       emusic            postgres    false    208            �
           2606    16409    artista artista_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY emusic.artista
    ADD CONSTRAINT artista_pkey PRIMARY KEY (artista_id);
 >   ALTER TABLE ONLY emusic.artista DROP CONSTRAINT artista_pkey;
       emusic            postgres    false    205            �
           2606    16411    musica musica_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY emusic.musica
    ADD CONSTRAINT musica_pkey PRIMARY KEY (musica_id);
 <   ALTER TABLE ONLY emusic.musica DROP CONSTRAINT musica_pkey;
       emusic            postgres    false    204            �
           2606    16427    album album_artista_fk_1    FK CONSTRAINT     �   ALTER TABLE ONLY emusic.album
    ADD CONSTRAINT album_artista_fk_1 FOREIGN KEY (artista_id) REFERENCES emusic.artista(artista_id);
 B   ALTER TABLE ONLY emusic.album DROP CONSTRAINT album_artista_fk_1;
       emusic          postgres    false    2707    206    205            �
           2606    16447 "   album_musica album_musica_album_fk    FK CONSTRAINT     �   ALTER TABLE ONLY emusic.album_musica
    ADD CONSTRAINT album_musica_album_fk FOREIGN KEY (album_id) REFERENCES emusic.album(album_id);
 L   ALTER TABLE ONLY emusic.album_musica DROP CONSTRAINT album_musica_album_fk;
       emusic          postgres    false    2709    206    207            �
           2606    16422    album album_musica_fk    FK CONSTRAINT     ~   ALTER TABLE ONLY emusic.album
    ADD CONSTRAINT album_musica_fk FOREIGN KEY (musica_id) REFERENCES emusic.musica(musica_id);
 ?   ALTER TABLE ONLY emusic.album DROP CONSTRAINT album_musica_fk;
       emusic          postgres    false    2705    206    204            �
           2606    16452 #   album_musica album_musica_musica_fk    FK CONSTRAINT     �   ALTER TABLE ONLY emusic.album_musica
    ADD CONSTRAINT album_musica_musica_fk FOREIGN KEY (musica_id) REFERENCES emusic.musica(musica_id);
 M   ALTER TABLE ONLY emusic.album_musica DROP CONSTRAINT album_musica_musica_fk;
       emusic          postgres    false    207    204    2705            �
           2606    16437 (   artista_musica artista_musica_artista_fk    FK CONSTRAINT     �   ALTER TABLE ONLY emusic.artista_musica
    ADD CONSTRAINT artista_musica_artista_fk FOREIGN KEY (artista_id) REFERENCES emusic.artista(artista_id);
 R   ALTER TABLE ONLY emusic.artista_musica DROP CONSTRAINT artista_musica_artista_fk;
       emusic          postgres    false    2707    208    205            �
           2606    16442 '   artista_musica artista_musica_musica_fk    FK CONSTRAINT     �   ALTER TABLE ONLY emusic.artista_musica
    ADD CONSTRAINT artista_musica_musica_fk FOREIGN KEY (musica_id) REFERENCES emusic.musica(musica_id);
 Q   ALTER TABLE ONLY emusic.artista_musica DROP CONSTRAINT artista_musica_musica_fk;
       emusic          postgres    false    208    204    2705                   x������ � �      !      x������ � �         V   x�%���0���� �k�TD%�M���sp=m�#�蔜%�A?p߭�QIU�k��ʉzql��M#E֏Vh��n�?�oՈ�      "      x������ � �            x������ � �     