 
class ArtistaRepository {
    
    constructor(conexao) {
       this._conexao = conexao;
       this._select = 'select id, nome, nacionalidade from emusic.artista ';
    }

    porId(id, callback ) {
        this._conexao.query(`${this._select} where id = ${id}` , callback);
    }


    todos(callback ) {
      this._conexao.query(this._select, callback);
    }

   
    salva(artista, callback) {
        console.log(artista.id);

        if ( (artista.hasOwnProperty('id')) && (artista.id > 0) ) {
                this._conexao.query('update emusic.artista set ? where id = ' + artista.id, artista, callback);
                console.log('executou update');

        } else {
            this._conexao.query('insert into emusic.artista set ?', artista, callback);
            console.log('executou insert');
        }    
    }

    remove(artista, callback) {
        this._conexao.query('delete from emusic.artista where id = ' + artista.id, callback);
    }

} 

module.exports = () => { return ArtistaRepository };