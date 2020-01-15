 
class MusicaRepository {
    
    constructor(conexao) {
       this._conexao = conexao;
    }

    porId(id, callback ) {
        this._conexao.query(`select * from emusic.musicas where id = ${id}`, callback);
    }


    todos(callback ) {
      this._conexao.query('select emusic.musicas.id, musicas.nome, duracao, artistas.nome from emusic.musicas inner join emusic.artistas on artista_id = artistas.id'
      , callback);
      console.log('executou select');
    }

   
    salva(musica, callback) {
        console.log('ID ' + musica.id);

        if ( (musica.hasOwnProperty('id')) && (musica.id > 0) ) {
               this._conexao.query('update emusic.musicas set ? where id = ' + musica.id, musica, callback);
               console.log('executou update');

        } else {
            this._conexao.query('insert into emusic.musicas set ?', musica, callback);
            console.log('executou insert');

        }    
    }

    remove(musica, callback) {
        this._conexao.query('delete from emusic.musicas where id = ' + musica.id, callback);
    }

} 

module.exports = () => { return MusicaRepository };