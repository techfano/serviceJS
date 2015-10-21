var express = require('express')
var app = express()

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/academydb');


var bodyParser = require('body-parser');
var author = require('./model/author.model');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    res.setHeader('Content-Type', 'application/json');
    next();
});

app.set('json spaces', 2);

app.post('/api/author/create', function(req, res) {

	var newAuthor = author(req.body);

	if (!req.body){ 

	 	return res.sendStatus(400);
	
	}else{

	 	newAuthor.save(function(err) {
	 	  if (err){ res.send(err); };
	 	  res.send('Author created!');
	 	});

	}

});

app.get('/api/author/:id', function(req, res) {

	author.findById(req.params.id, function(err,author){
		console.log(req.params.id);
		res.send(author);

	});

});

app.get('/api/author/get/all', function(req, res) {
	author.find({},function(err,author){
	console.log('p',author);
		res.send(author);

	});

});

app.listen(84);
console.log("App listening on port 84");
