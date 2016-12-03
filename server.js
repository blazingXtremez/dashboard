// this is the main server file
const express = require('express');

// declaring the app as part of express
var app = express();


// setting app level middleware that will log in to console
app.use((req, res, next) => {
	console.log("request made to ", req.url);
	next();
});

// setting a starting route
app.get('/', (req, res) => {
	res.sendFile(__dirname
	 + '/public/index.html');
});

// create some more routes
app.get('/test' , (req, res) => {
	res.send("This is a new page");
});

// some milddleware to handle API calls for database



// make the app listen on the port 3000
app.listen(3000, () => {
	console.log("Server Started on Port 3000..");
});


// stuff to do 
// route for various page?
// schema and model for mongoose dbt
// test mongoose db
// apis to get and post from mongoose db
// front end
