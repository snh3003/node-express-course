const express = require('express'); // Gives you the access to the express library by searching in the node_modules
const app = express(); // Creates an instance of the express constructor

// Access methods for creating a server

app.listen(8000, function(){ //
	console.log("Server is running");
})


