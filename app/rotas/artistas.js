module.exports = function (app) {

    app.get('/artistas', function (req, resp) {

        let conexao = new app.infra.ConnectionFactory().getConexao();
        let artistas = new app.repositorio.ArtistaRepository(conexao);

        artistas.todos(function (erros, resultado) {

            if (erros) {
                console.log(erros);
            }
            resp.render('artistas/listagem', {lista: resultado.rows });
        });
        conexao.end();
    });

    /* ---------------------------------------------------------------- */
    app.get('/artistas/form', function (req, resp) {
        resp.render('artistas/form-cadastro', {errosValidacao: {},  artista: {} });
    });


    app.post('/artistas', function (req, resp) {
        let artista = req.body;
        console.log('post');
        console.log(artista);

        req.assert('nome', 'Nome do artista é obrigatório.').notEmpty();

        let erros = req.validationErrors();

        if (erros) {
            resp.render('artistas/form-cadastro', { errosValidacao: erros, artista: artista });
            return;
        }


        let conexao = new app.infra.ConnectionFactory().getConexao();
        let artistas = new app.repositorio.ArtistaRepository(conexao);

        artistas.salva(artista, function (erros, resultados) {
           //resp.render('artistas/listagem' );   
           resp.redirect('/artistas');
        });

        conexao.end();

    });

    app.post('/artistas/remove/(:id)', function (req, resp) {
        let artista = {
            id: req.params.id
        }

        let conexao = new app.infra.ConnectionFactory().getConexao();
        let artistas = new app.repositorio.ArtistaRepository(conexao);

        artistas.remove(artista, function (erros, resultados) {
            resp.redirect('/artistas');
        });
    });


    app.get('/artistas/edita/(:id)', function (req, resp) {
        

        let conexao = new app.infra.ConnectionFactory().getConexao();
        let artistas = new app.repositorio.ArtistaRepository(conexao);

        artistas.porId(req.params.id, function (erros, resultado) {
            
            if (erros ) {
                console.log(erros);
            }
            resp.render('artistas/form-cadastro', {errosValidacao: erros,  
                                                    artista: {
                                                        id: resultado.rows.artista_id,
                                                        nome: resultado.rows.nome,
                                                        nacionalidade: resultado.rows.nacionalidade } 
            });
            console.log('porId');
            console.log(resultado.rows);
        });
        conexao.end();
    });


}