// this is the main server file
const express = require('express');

// declaring the app as part of express
var app = express();

// setting a starting route
app.get('/', (req, res) => {
	res.send("Hello this is a test");
});

// create some more routes


// some milddleware to handle API calls for database



// make the app listen on the port 3000
app.listen(3000, () => {
	console.log("Server Started on Port 3000..");
});



