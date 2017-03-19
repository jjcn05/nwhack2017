var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('hello world')
   // res.sendFile('/site/index.html');
});

app.post('/', function (req, res) {
    res.send('POST Request');
});

app.put('/', function (req, res) {
    res.send('PUT Request');
});

app.delete('/', function (req, res) {
    res.send('DELETE Request');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
   
//app.use("/site" , express.static(__dirname + 'index')); //Serves resources from public folder , access site folder then looks for index file

//var server = app.listen(process.env.PORT || 5000);

