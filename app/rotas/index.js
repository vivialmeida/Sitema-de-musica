
module.exports = function(app) {
    app.get('/', (req, resp) => resp.render('index'));

    app.get('/musicas', function (req, resp) {

        let conexao = new app.infra.ConnectionFactory().getConexao();
        let musicas = new app.repositorio.MusicaRepository(conexao);

        musicas.todos(function (erros, resultado) {

            if (erros) {
                console.log(erros);
            }
            resp.render('musicas/listagem', { lista: resultado })
        });
        conexao.end();
    });

    app.get('/artistas', function (req, resp) {
    
        let conexao = new app.infra.ConnectionFactory().getConexao();
        let artistas = new app.repositorio.ArtistaRepository(conexao);
    
        artistas.todos(function (erros, resultado) { 
    
            if (erros) {
                console.log(erros);
            }
            resp.render('artistas', {lista: resultado })
        });
        conexao.end();
    });

    app.get('/albuns', function (req, resp) {
    
        let conexao = new app.infra.ConnectionFactory().getConexao();
        let albuns = new app.repositorio.AlbumRepository(conexao);
    
        albuns.todos(function (erros, resultado) { 
    
            if (erros) {
                console.log(erros);
            }
            resp.render('albuns/listagem', {lista: resultado })
        });
        conexao.end();
    });
}

