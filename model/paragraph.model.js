var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paragraphSchema = new Schema({
    post_id: String,
    post_url: String,
    post_number_order: Number,
    subtitle: String,
    paragraph: String,
    image_url: String,
    created_at: { type: Date, default: Date.now }
},{ collection: 'paragraph' });

var paragraph = mongoose.model('paragraph', paragraphSchema);

module.exports = paragraph;