var express = require('express');

//Create our app
var app = express();

app.use(express.static('public'));

app.listen(8000, function(){
  console.log("React app is up and running")
});
