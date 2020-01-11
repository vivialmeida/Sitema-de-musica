 
class AlbumRepository {
    
    constructor(conexao) {
       this._conexao = conexao;
    }

    porId(id, callback ) {
        this._conexao.query(`select * from albuns where id = ${id}`, callback);
    }


    todos(callback ) {
      this._conexao.query('select * from albuns', callback);
    }

   
    salva(album, callback) {
        console.log('ID ' + album.id);

        if ( (album.hasOwnProperty('id')) && (album.id > 0) ) {
               this._conexao.query('update albuns set ? where id = ' + album.id, album, callback);
               console.log('executou update');

        } else {
            this._conexao.query('insert into albuns set ?', album, callback);
            console.log('executou insert');

        }    
    }

    remove(album, callback) {
        this._conexao.query('delete from albuns where id = ' + album.id, callback);
    }

} 

module.exports = () => { return AlbumRepository };