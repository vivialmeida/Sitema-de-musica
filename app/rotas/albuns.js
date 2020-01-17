module.exports = function (app) {

    app.get('/albuns', function (req, resp) {
    
        let conexao = new app.infra.ConnectionFactory().getConexao();
        let albuns = new app.repositorio.AlbumRepository(conexao);
    
        albuns.todos(function (erros, resultado) { 
    
            if (erros) {
                console.log(erros);
            }
            resp.render('albuns/listagem',   {lista: resultado.rows})

        });
        conexao.end();
    });
    /* ---------------------------------------------------------------- */
    app.get('/albuns/form', function (req, resp) {
        resp.render('albuns/form-cadastro', {errosValidacao: {},  artista: {} });
    });


    app.post('/albuns', function (req, resp) {

        let artista = req.body;
        console.log(artista);

        req.assert('nome', 'Nome do album é obrigatório.').notEmpty();

        let erros = req.validationErrors();

        if (erros) {
            resp.render('albuns/form-cadastro', { errosValidacao: erros, musica: musica });
            return;
        }


        let conexao = new app.infra.ConnectionFactory().getConexao();
        let albuns = new app.repositorio.AlbumRepository(conexao);

        albuns.salva(albuns, function (erros, resultados) {
           //resp.render('artistas/listagem' );   
           resp.redirect('/albuns');
        });

        conexao.end();

    });

    app.post('/albuns/remove/(:id)', function (req, resp) {
        let musica = {
            id: req.params.id
        }

        let conexao = new app.infra.ConnectionFactory().getConexao();
        let albuns = new app.repositorio.AlbumRepository(conexao);

        albuns.remove(albuns, function (erros, resultados) {
            resp.redirect('/albuns');
        });
    });


    app.get('/albuns/edita/(:id)', function (req, resp) {
        

        let conexao = new app.infra.ConnectionFactory().getConexao();
        let albuns = new app.repositorio.AlbumRepository(conexao);

        albuns.porId(req.params.id, function (erros, resultado) {
            if (erros ) {
                console.log(erros);
            }
            resp.render('albuns/form-cadastro', {errosValidacao: erros,  
                                                        album: {
                                                        id: resultado.rows.id,
                                                        nome: resultado.rows.nome,
                                                        genero: resultado.rows.genero, 
                                                        nacionalidade: resultado.rows.nacionalidade } 
            });
            console.log(resultado);
        });
        conexao.end();
    });


}
