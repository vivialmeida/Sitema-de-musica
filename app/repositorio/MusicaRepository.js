 
class MusicaRepository {
    
    constructor(conexao) {
       this._conexao = conexao;
    }

    porId(id, callback ) {
        this._conexao.query(`select * from musicas where id = ${id}`, callback);
    }


    todos(callback ) {
      this._conexao.query('select * from musicas', callback);
    }

   
    salva(musica, callback) {
        console.log('ID ' + musica.id);

        if ( (produto.hasOwnProperty('id')) && (produto.id > 0) ) {
               this._conexao.query('update musica set ? where id = ' + musica.id, musica, callback);
               console.log('executou update');

        } else {
            this._conexao.query('insert into produto set ?', musica, callback);
            console.log('executou insert');

        }    
    }

    remove(musica, callback) {
        this._conexao.query('delete from musica where id = ' + musica.id, callback);
    }

} 

module.exports = () => { return MusicaRepository };