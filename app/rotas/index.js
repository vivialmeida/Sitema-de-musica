
module.exports = function(app) {
    app.get('/', (req, resp) => resp.render('index'));



    app.get('/musicas', function (req, resp) {
    
        let conexao = new app.infra.ConnectionFactory().getConexao();
        let produtos = new app.repositorio.MusicasRepository(conexao);
    
        produtos.todos(function (erros, resultado) { 
    
            if (erros) {
                console.log(erros);
            }
            resp.render('musicas/listagem', {lista: resultado })
        });
        conexao.end();
    });

    http://localhost:3000/artistas

    app.get('/artistas', function (req, resp) {
    
        let conexao = new app.infra.ConnectionFactory().getConexao();
        let artistas = new app.repositorio.ArtistaRepository(conexao);
    
        artistas.todos(function (erros, resultado) { 
    
            if (erros) {
                console.log(erros);
            }
            resp.render('musicas/artistas', {lista: resultado })
        });
        conexao.end();
    });
}

