var express = require('express')
var app = express()

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/prodesigndb');


var bodyParser = require('body-parser');
var paragraph = require('./model/paragraph.model');

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

app.post('/api/paragraph/create', function(req, res) {

	var newParagraph = paragraph(req.body);

	if (!req.body){ 

	 	return res.sendStatus(400);
	
	}else{

	 	newParagraph.save(function(err) {
	 	  if (err){ res.send(err); };
	 	  res.send('Paragraph created!');
	 	});

	}

});

app.put('/api/paragraph/update/:id',function(req,res){
	paragraph.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, paragraph) {
		res.send(req.body);
	});
});

app.get('/api/paragraph/:id', function(req, res) {

	paragraph.findById(req.params.id, function(err,paragraph){
		res.send(paragraph);

	});

});

app.get('/api/paragraph/get/url/:post_url', function(req, res) {

	paragraph.find({post_url:req.params.post_url}, function(err,paragraph){
		res.send(paragraph);
	});

});

app.get('/api/paragraph/get/all', function(req, res) {
	paragraph.find({},function(err,paragraph){
		res.send(paragraph);

	});

});

app.listen(8002);
console.log("App listening on port 8002");
