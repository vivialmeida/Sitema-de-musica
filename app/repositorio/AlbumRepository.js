 
class AlbumRepository {
    
    constructor(conexao) {
       this._conexao = conexao;
    }

    porId(id, callback ) {
        this._conexao.query(`select * from emusic.albuns where id = ${id}`, callback);
    }


    todos(callback ) {
      this._conexao.query('select * from emusic.albuns', callback);
      console.log('executou select');
      
    }

   
    salva(album, callback) {
        console.log('ID ' + album.id);

        if ( (album.hasOwnProperty('id')) && (album.id > 0) ) {
               this._conexao.query('update emusic.albuns set ? where id = ' + album.id, album, callback);
               console.log('executou update');

        } else {
            this._conexao.query('insert into emusic.albuns set ?', album, callback);
            console.log('executou insert');

        }    
    }

    remove(album, callback) {
        this._conexao.query('delete from emusic.albuns where id = ' + album.id, callback);
    }

} 

module.exports = () => { return AlbumRepository };