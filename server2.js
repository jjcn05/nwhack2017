var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var pg = require('pg');
var recipes = [];
var connectionString = process.env.DATABASE_URL || 'postgresql://root@10.0.0.4:26257?sslmode=disable';
var client = new pg.Client(connectionString);

pg.connect(connectionString, function(err, client, done) {
				 // Handle connection errors
				 if(err) {
					 done();
					 console.log(err);
					 return res.status(500).json({ success: false, data: err});
				 }
client.query('SELECT calorie, price FROM ', [calorie, price], function(err, result))
if (err){
	return console.error('error happened during query', err)
}
}
findItems(calorie, price){
	var listFinished = false;
	var currentCalories = 0;
	var currentMoney = 0;
	
	while ((currentCalories < calorie) AND (currentMoney < price) AND (listFinished == false)){
		 var validItemSelected = FALSE;
While (validItemSelected == FALSE){
	var randomItem;
	client.query('SELECT name FROM table ORDER BY RANDOM() LIMIT 1 ', [randomItem], function(err, result));
	var itemCalorie;
	var itemMoney;
	client.query('SELECT calorie FROM table WHERE item = randomItem ', [itemCalorie], function(err, result));
	client.query('SELECT price FROM table WHERE item = randomItem ', [itemMoney], function(err, result));

	IF  ((currentCalories + itemCalorie > calorie) OR (currentMoney + itemMoney > price)){
		IF ((calorie - currentCalories < 100) AND (price - currentMoney <= 5)){
			recipes.push(randomItem);
			return listItems;
		}
		If ((calorie - currentCalories> 100) AND (price - currentMoney <= 5)){
			client.query('DELETE FROM table ORDER BY Calories DESC LIMIT 1 ', [itemCalorie], function(err, result));
		}
		IF ((calorie - currentCalories < 100) AND (price - currentMoney <= 0)){
			client.query('DELETE FROM table ORDER BY Prices DESC LIMIT 1 ', [itemCalorie], function(err, result));

	}
}
else {


	recipes.push(randomItem);
}
}
return ListItems;
}

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
