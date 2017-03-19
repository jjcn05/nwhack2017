var express = require('express');
var app = express();


app.use(express.static(__dirname + 'site')); //Serves resources from public folder

// respond with index.html when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.render('/site/index.html'); // accress index.html in the site folder
});

var server = http.createServer(app); // register routes to app variable
server.listen(process.env.PORT || 5000);
