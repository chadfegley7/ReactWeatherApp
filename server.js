var express = require('express');

//Create our app
var app = express();
const PORT = process.env.PORT || 8000;

app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
  }
  else{
    res.redirect('http://' + req.hostname + req.url);
  }
})

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log("React app is up and running on port " + PORT);
});
