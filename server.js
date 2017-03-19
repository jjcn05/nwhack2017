var express = require('express');
var app = express();

app.use(express.static(__dirname + 'site')); //Serves resources from public folder

var server = app.listen(process.env.PORT || 5000);
