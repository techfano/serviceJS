var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    post_id: String,
    post_url: String,
    post_number_order: Number,
    subtitle: String,
    paragraph: String,
    image_url: String
},{ collection: 'paragraph' });

var paragraph = mongoose.model('paragraph', paragraphSchema);

module.exports = paragraph;