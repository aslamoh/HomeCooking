const express = require('express');

const app = express();


// // Views in public directory
 app.use(express.static('public'));

// Main, error and success views
 app.get('/', function (request, response) {
  response.sendFile(__dirname + '/public/index');
 });

// app.get('/', function (request, response) {
//   response.send('welcome to.....');
// })



// app.get("/success", function (request, response) {
//   response.sendFile(__dirname + '/public/success.html');
// });

// app.get("/error", function (request, response) {
//   response.sendFile(__dirname + '/public/error.html');
// });





/// start up server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
	console.log(`Listening on port ${PORT}`);
});