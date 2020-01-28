const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/rate_my_cakes_db', {useNewUrlParser: true});

const CommentSchema = new mongoose.Schema({
    comment: {type:String, required: true, minlength: 1},
    rating: {type: Number, required: true},
}, {timestamps: true}) 
const Comment = mongoose.model("Comment", CommentSchema);


const CakeSchema = new mongoose.Schema({
    name: {type:String, required: true, minlength: 1},
    image_url: {type: String, required: true,},
    comments: [CommentSchema],
}, {timestamps: true})
const Cake = mongoose.model("Cake", CakeSchema);

module.exports = {
    Cake: Cake,
    Comment: Comment,
}