require("dotenv").config();
var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", (req, res) => {
  const ipaddress = req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];
  
  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
  });
});

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
