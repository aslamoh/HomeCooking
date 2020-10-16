
const express = require('express');

const app = express();


// Views in public directory
app.use(express.static('public'));

// Main, error and success views
app.get('/', function (request, response) {
  response.sendFile(__dirname + '/public/index');
});

// app.get("/success", function (request, response) {
//   response.sendFile(__dirname + '/public/success.html');
// });

// app.get("/error", function (request, response) {
//   response.sendFile(__dirname + '/public/error.html');
// });

 // cors origin URL - Allow inbound traffic from origin
 corsOptions = {
  origin: "https://dashboard.heroku.com",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));





app.listen(3000, function () {
  console.log('Server listening on port 3000.');
});