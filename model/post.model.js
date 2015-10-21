var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
	url: String,
    title: String,
    title_sub_head: String,
    image_url: String,
    resume: String,
    mainparagraph: String,
    autor_id: String,
    post_time: { type: Date, default: Date.now }
},{ collection: 'post' });

var post = mongoose.model('post', postSchema);

module.exports = post;