module.exports = function (app) {

    app.get('/musicas', function (req, resp) {

        let conexao = new app.infra.ConnectionFactory().getConexao();
        let musicas = new app.repositorio.MusicaRepository(conexao);

        musicas.todos(function (erros, resultado) {

            if (erros) {
                console.log(erros);
            }
            resp.render('musicas/listagem', {lista: resultado.rows});
        });
        conexao.end();
    });

    /* ---------------------------------------------------------------- */
    app.get('/musicas/form', function (req, resp) {
        resp.render('musicas/form-cadastro', {errosValidacao: {},  artista: {} });
    });


    app.post('/musicas', function (req, resp) {

        let artista = req.body;
        console.log(artista);

        req.assert('faixa', 'Nome do faixa é obrigatório.').notEmpty();

        let erros = req.validationErrors();

        if (erros) {
            resp.render('musicas/form-cadastro', { errosValidacao: erros, musica: musica });
            return;
        }


        let conexao = new app.infra.ConnectionFactory().getConexao();
        let musicas = new app.repositorio.MusicaRepository(conexao);

        musicas.salva(musicas, function (erros, resultados) {
           //resp.render('artistas/listagem' );   
           resp.redirect('/musicas');
        });

        conexao.end();

    });

    app.post('/musicas/remove/(:id)', function (req, resp) {
        let musica = {
            id: req.params.id
        }

        let conexao = new app.infra.ConnectionFactory().getConexao();
        let musicas = new app.repositorio.MusicaRepository(conexao);

        musicas.remove(musica, function (erros, resultados) {
            resp.redirect('/musicas');
        });
    });


    app.get('/musicas/edita/(:id)', function (req, resp) {
        

        let conexao = new app.infra.ConnectionFactory().getConexao();
        let musicas = new app.repositorio.MusicaRepository(conexao);

        musicas.porId(req.params.id, function (erros, resultado) {
            if (erros ) {
                console.log(erros);
            }
            resp.render('musicas/form-cadastro', {errosValidacao: erros,  
                                                    musica: {
                                                        id: resultado.rows.id,
                                                        faixa: resultado.rows.faixa,
                                                        duracao: resultado.rows.duracao } 
            });
            console.log(resultado);
        });
        conexao.end();
    });


}
