var express = require('express');
var app = express();

//app.use("/site" , express.static(__dirname + 'index')); //Serves resources from public folder , access site folder then looks for index file

//var server = app.listen(process.env.PORT || 5000);


app.get('/site', function(req, res){
  res.render('index');
});

app.listen(3000);
