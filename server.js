//required packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

//app.use("/site" , express.static(__dirname + 'index')); //Serves resources from public folder , access site folder then looks for index file

//var server = app.listen(process.env.PORT || 5000);

