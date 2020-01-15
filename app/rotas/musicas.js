
module.exports = function(app) {
    app.post('/musicass', function (req, resp) {

        let musicas = req.body;
        console.log(musicas);

        req.assert('nome', 'Nome do produto é obrigatório.').notEmpty();
        req.assert('duracao', 'duracao no Formato inválido').isTime();
        //req.assert('dataCadastro', 'Data inválida').isDate();

        let erros = req.validationErrors();

        if (erros) {
            resp.render('musicas/form-cadastro', { errosValidacao: erros, musicas: musicas });
            return;
        }


        let conexao = new app.infra.ConnectionFactory().getConexao();
        let musica = new app.repositorio.MusicaRepository(conexao);

        musica.salva(musicas, function (erros, resultados) {
           //resp.render('produtos/listagem' );   
           resp.redirect('/musicas/listagem');
        });

        conexao.end();

    });
   
}

