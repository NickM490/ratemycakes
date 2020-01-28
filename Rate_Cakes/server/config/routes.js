const cakes = require('../controllers/rate_cakes.js');
const comments = require('../controllers/rate_cakes.js');


module.exports = function (app) {
    app.get('/cakes', cakes.findall );

    app.post('/new/', (req, res) => {
        console.log(req.body)
        cakes.newcake(req, res);
    });

    //  cakes.new );

    app.post('/:id', comments.new );

    app.delete('/remove/:id/', cakes.remove );

    app.get('/:id', cakes.display, comments.display );

    app.put('/:id', cakes.update );

}