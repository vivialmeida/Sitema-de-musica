module.exports = function(app) {
    app.get('/cadastro', (req, resp) => resp.render('cadastro') );
}
