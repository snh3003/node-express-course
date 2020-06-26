const express = require('express'); // Gives you the access to the express library by searching in the node_modules
const app = express(); // Creates an instance of the express constructor

// Sample JSON Data

const mockUserData = [
	{name: 'Mark'},
	{name: 'Jill'},
];

app.get('/get', function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})
// Access methods for creating a server

app.listen(8000, function(){ //
	console.log("Server is running");
})
