 
class MusicaRepository {
    
    constructor(conexao) {
       this._conexao = conexao;
       this._select = 'select emusic.musica.id, faixa, duracao, artista.nome, ano from emusic.musica, emusic.artista ';
    }

    porId(id, callback ) {
        this._conexao.query(`${this._select} where id = ${id}`, callback);
    }


    todos(callback ) {
      this._conexao.query(this._select , callback);
      console.log('executou select');
    }

   
    salva(musica, callback) {
        console.log('ID ' + musica.id);

        if ( (musica.hasOwnProperty('id')) && (musica.id > 0) ) {
               this._conexao.query('update emusic.musica set ? where id = ' + musica.id, musica, callback);
               console.log('executou update');

        } else {
            this._conexao.query('insert into emusic.musica set ?', musica, callback);
            console.log('executou insert');

        }    
    }

    remove(musica, callback) {
        this._conexao.query('delete from emusic.musica where id = ' + musica.id, callback);
    }

} 

module.exports = () => { return MusicaRepository };