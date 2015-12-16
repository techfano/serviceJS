var express = require('express')
var app = express()

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/prodesigndb');


var bodyParser = require('body-parser');
var post = require('./model/post.model');

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

app.post('/api/post/create', function(req, res) {

	var newPost = post(req.body);

	if (!req.body){ 

	 	return res.sendStatus(400);
	
	}else{

	 	newPost.save(function(err) {
	 	  if (err){ res.send(err); };
	 	  res.send('Post created!');
	 	});

	}

});

app.put('/api/post/update',function(req,res){
	post.findOneAndUpdate({ _id: '5670f6d002740a542843d435' }, req.body, function (err, post) {
		res.send(post);
	});
});

app.get('/api/post/:id', function(req, res) {

	post.findById(req.params.id, function(err,post){
		res.send(post);

	});

});

app.get('/api/post/get/url/:url', function(req, res) {

	post.find({url:req.params.url}, function(err,post){
		res.send(post);

	});

});

app.get('/api/post/get/all', function(req, res) {
	post.find({},function(err,post){
		res.send(post);

	});

});

app.listen(8003);
console.log("App listening on port 8003");
