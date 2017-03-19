var express = require('express');
var app = express();


app.use(express.static(__dirname + 'index')); //Serves resources from public folder

 //respond with index.html when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.render('index'); // accress index.html in the site folder
});

//var server = http.createServer(app); // register routes to app variable
//app.listen(process.env.PORT || 5000);

var server = app.listen(process.env.PORT || 5000);
