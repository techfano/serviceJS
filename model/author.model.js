var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = new Schema({
	userId: {type: String, required: true, unique: true},
	alias: String
},{ collection: 'author' });

var author = mongoose.model('author', authorSchema);

module.exports = author;