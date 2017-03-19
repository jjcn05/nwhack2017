var express = require('express');
var app = express();

//app.use("/site" , express.static(__dirname + 'index')); //Serves resources from public folder , access site folder then looks for index file

//var server = app.listen(process.env.PORT || 5000);


// Configure server
app.configure( function() {

    //Don't change anything here...

    //Where to serve static content
    app.use("/site" , express.static(__dirname + 'index')); //Serves resources from public folder , access site folder then looks for index file

    //Nothing changes here either...
});

//Start server --- No changes made here
var port = 5000;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});
