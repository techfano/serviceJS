var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: String,
  name: String,
  lastName: String,
  admin: Boolean,
  root: Boolean,
  birthDay: Date,
  location: String,
  created_at: { type: Date, default: Date.now }
},{ collection: 'user' });

var user = mongoose.model('user', userSchema);

module.exports = user;