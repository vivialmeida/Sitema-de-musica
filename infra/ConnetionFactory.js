let mysql = require('mysql');

// solução 03: Usando classes
class ConnectionFactory {

    constructor() {
        this._conexao = mysql.createConnection({
          
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'lojajs'
        });
    }


    getConexao() {
        return this._conexao;
    }

}

module.exports = () => { return ConnectionFactory };

