const Models = require('../models/cakes.js');
const Cake = Models.Cake;
// const Comment = Models.Comment;


module.exports = {
    index: function (req, res) {
        res.render('index');
    },

    findall: function (req, res) {
        Cake.find()
            .then(cakes => res.json(cakes))
            .catch(err => res.json(err));
    },

    newcake: function (req, res) {
        console.log(req.body, "Controller")
        Cake.create(req.body)
            .then(cakes => res.json(cakes))
            .catch(err => res.json(err));
    },

    new: function (req, res) {
        Cake.updateOne({_id: req.params.id}, {$push:{comments: {comment: req.body.comment, rating: req.body.rating}}}, {runValidators: true}) // or remove to remove all
            .then(comments => res.json(comments))
            .catch(err => res.json(err));
    },

    display: function (req, res) {
        Cake.findOne({_id: req.params.id}) // or find
            .then(cakes => res.json(cakes))
            .catch(err => res.json(err));
    },
    
    update: function (req, res) {
        Cake.updateOne({_id: req.params.id}, {name: req.body.name, image_url: req.body.image_url}) // or find
            .then(cakes => res.json(cakes))
            .catch(err => res.json(err));
    },

    remove: function (req, res) {
        Cake.deleteOne({_id: req.params.id}) // or remove to remove all
            .then(cakes => res.json(cakes))
            .catch(err => res.json(err));
    },
}