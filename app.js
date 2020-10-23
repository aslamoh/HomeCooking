const path = require('path');
const express = require('express');
//const dotenv = require('dotenv').config();

const app = express();
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// routes

app.get('/', function(request, response) {
	response.render('index', {});
});

app.get('/menu', function(request, response) {
	response.render('menu', {});
});
app.get('/contactus', function(request, response) {
	response.render('contactus', {});
});
app.get('/pricing', function(request, response) {
	response.render('pricing', {});
});

app.get('/gallery', function(request, response) {
	response.render('gallery', {});
});




/// start up server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
	console.log(`Listening on port ${PORT}`);
});