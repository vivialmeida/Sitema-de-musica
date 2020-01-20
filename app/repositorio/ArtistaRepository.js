 
class ArtistaRepository {
    
    constructor(conexao) {
       this._conexao = conexao;
    }

    porId(id, callback ) {
        this._conexao.query('select artista_id, nome, nacionalidade from emusic.artista where artista_id = ' + id , callback);
    }


    todos(callback ) {
      this._conexao.query('select artista_id, nome, nacionalidade from emusic.artista', callback);
    }

   
    salva(artista, callback) {
        console.log(artista.id);

        if ( (artista.hasOwnProperty('artista_id')) && (artista.id > 0) ) {
                this._conexao.query('update emusic.artista set ? where artista_id = ' + artista.id, artista, callback);
                console.log('executou update');

        } else {
            this._conexao.query('insert into emusic.artista set ?', artista, callback);
            console.log('executou insert');

        }    
    }

    remove(artista, callback) {
        this._conexao.query('delete from emusic.artista where artista_id = ' + artista.id, callback);
    }

} 

module.exports = () => { return ArtistaRepository };