/*

https://github.com/petersirka/node-mongolab
https://github.com/auth0/node-jsonwebtoken
http://code.tutsplus.com/es/tutorials/token-based-authentication-with-angularjs-nodejs--cms-22543

*/

var express = require('express')
var app = express()
var mongodb = require('mongolab-provider').init('pinbuydb', 'o5wMMdzdsFiwqsD6Pd-gh2-rCRmUnk4N');
var jwt = require('jsonwebtoken');

var errorResponseText='Error in server';

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.set('json spaces', 2);

app.get('/api/auth/:user/:key', function(req, res) {
  
	mongodb.documents('user', {where:{username:req.params.user,password:req.params.key}}, function(err,data){

		if (err) {

			var auth={};

			if(data[0]){
				var token = jwt.sign(data[0], 'shhhhh');
				if(req.params.user === data[0].username && req.params.key === data[0].password){
					auth.token = token;
					res.send(auth);
				}else{
					res.send(errorResponseText);
				}
			}else{
				res.send(errorResponseText);						
			}

		}else{

			res.send(errorResponseText+' MDB');

		}

	});


});





app.listen(4000);
console.log("App listening on port 4000");


