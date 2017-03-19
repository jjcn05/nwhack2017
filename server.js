var express = require('express');
var app = express();
var http = require('http');
var path = require('path');

app.use(express.static(path.resolve(__dirname, 'site'))); //Serves resources from public folder

 //respond with index.html when a GET request is made to the homepage
app.get('/', function(req, res) {
	res.send(__dirname)
  //res.render('index.html'); // accress index.html in the site folder
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

//custom 404 page
app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 Not Found');
});

app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 Server Error');
});

//var server = http.createServer(app); // register routes to app variable
//app.listen(process.env.PORT || 5000);

var server =  http.createServer(app);
    
    app.listen(process.env.PORT || 5000);
