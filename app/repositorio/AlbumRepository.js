 
class AlbumRepository {
    
    constructor(conexao) {
       this._conexao = conexao;
       this._select = 'select emusic.album.id, album.nome, album.ano, album.genero, descricao, album.duracao, artista.nome, musica.nome from emusic.album, emusic.artista, emusic.musica ';
    }

    porId(id, callback ) {
        this._conexao.query(`${this._select} where id = ${id}`, callback);
    }


    todos(callback ) {
      this._conexao.query(`${this._select}`, callback);
      console.log('executou select');
      
    }

   
    salva(album, callback) {
        console.log('ID ' + album.id);

        if ( (album.hasOwnProperty('id')) && (album.id > 0) ) {
               this._conexao.query('update emusic.album set ? where id = ' + album.id, album, callback);
               console.log('executou update');

        } else {
            this._conexao.query('insert into emusic.album set ?', album, callback);
            console.log('executou insert');

        }    
    }

    remove(album, callback) {
        this._conexao.query('delete from emusic.album where id = ' + album.id, callback);
    }

} 

module.exports = () => { return AlbumRepository };