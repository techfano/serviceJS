var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = new Schema({
	name: String,
	last_name: String,
	alias: String
},{ collection: 'author' });

var author = mongoose.model('author', authorSchema);

module.exports = author;

{
    "name": "Alexandro Estefano",
    "last_name": "Castañeda",
    "alias": "Techfano"
}