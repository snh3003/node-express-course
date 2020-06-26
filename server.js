const express = require('express'); // Gives you the access to the express library by searching in the node_modules
const app = express(); // Creates an instance of the express constructor
const bodyParser = require('body-parser');
app.use(bodyParser.json());

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

// colons before any thing is considered as variables

app.get('/users/:id', function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: "got one user",
		users: req.params.id
	})
})

// Function to handle a POST request made to the LOGIN endpoint

app.post('./login', function(req,res){
	const username = req.body.username;
	const password = req.body.password;

	const mockUsername = "billyTheKid";
	const mockPassword = '123';

	if(username===mockUsername && password === mockPassword){
		res.json({
			success: true,
			message: "password and username match!!!",
			token: "encrypted tokes goes here"
		})
	} else{
		res.json({
			success: false,
			message: "password and username do not match"
		})
	}
})

// Access methods for creating a server

app.listen(8000, function(){ //
	console.log("Server is running");
})

