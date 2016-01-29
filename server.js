//server.js
//load the things we need
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
//app.use('/static', express.static(__dirname + '/public'));

//index page
app.get('/', function(req,res){
	var drinks = [
		{name: 'Bloody Mary', drunkness: 3},
		{name: 'Martini', drunkness: 5},
		{name: 'Scotch', drunkness: 10}
	];
	var tagline = "Any code of your own that you haven't look at for six or more months might as well have been written by someone else.";
	res.render('pages/index', {
		drinks: drinks,
		tagline: tagline
	});
});

//about me
app.get('/about', function(req,res){
	res.render('pages/about');
});

//my pictures
app.get('/pictures', function(req, res){
	res.render('pages/pictures');
});

app.listen(Number(process.env.PORT || 8080), function(){
	console.log("Listening on 8080...");
});