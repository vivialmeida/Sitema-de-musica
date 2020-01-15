 
class ArtistaRepository {
    
    constructor(conexao) {
       this._conexao = conexao;
    }

    porId(id, callback ) {
        this._conexao.query(`select * from emusic.artistas where id = ${id}`, callback);
    }


    todos(callback ) {
      this._conexao.query('select * from emusic.artistas', callback);
    }

   
    salva(artista, callback) {
        console.log('ID ' + artista.id);

        if ( (artista.hasOwnProperty('id')) && (artista.id > 0) ) {
               this._conexao.query('update emusic.artistas set ? where id = ' + artista.id, artista, callback);
               console.log('executou update');

        } else {
            this._conexao.query('insert into emusic.artistas set ?', artista, callback);
            console.log('executou insert');

        }    
    }

    remove(artista, callback) {
        this._conexao.query('delete from emusic.artista where id = ' + artista.id, callback);
    }

} 

module.exports = () => { return ArtistaRepository };