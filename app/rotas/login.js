
module.exports = function(app) {
    app.get('/login', (req, resp) => resp.render('login') );
}