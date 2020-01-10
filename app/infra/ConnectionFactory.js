let pg = require('pg');
var config = {
    user: 'postgres',
    database: 'postgres',
    password: '123456',
    schemas: 'emusic',
    port: 5432
};

const pool = null;

// solução 03: Usando classes
class ConnectionFactory {

    constructor() {
        this._conexao = new pg.Pool(config); 
        console.log("Conectou")


}

    
    // 
    //     this._conexao = ps.createConnection({
          
    //         host: 'localhost',
    //         user: 'postgres',
    //         password: '123456',
    //         database: 'emusic'
    //     });
    // }


    getConexao() {
        return this._conexao;
    }

}

module.exports = () => { return ConnectionFactory };



// solução 02: Para evitar fazer a conexão com o consign
/* 

const criaConexao =  function() {
    console.log('conexão estabelecida com o banco de dados');
    return ps.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'lojajs'
    });
}

module.exports = function() {
    console.log('carregando o modulo de conexao');
    return criaConexao;
}

 */

/* solucao 01 */

/* 
const ps = require('ps');

module.exports = function() {
    console.log('conexão estabelecida com o banco de dados');
    return ps.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'lojajs'
    });
} */