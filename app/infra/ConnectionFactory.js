let pg = require('pg');
var config = {
    user: 'postgres',
    database: 'postgres',
    password: '123456',
    port: 5432
};

const pool = null;      

class ConnectionFactory {

    constructor() {
        this._conexao = new pg.Pool(config); 
        console.log("Conectou")


}

    getConexao() {
        return this._conexao;
    }

}

module.exports = () => { return ConnectionFactory };

