
module.exports = function(app) {
    app.get('/contato', (req, resp) => resp.render('contato') );
}