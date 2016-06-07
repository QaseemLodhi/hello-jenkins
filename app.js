

var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('hello j');
});

app.listen(process.env.PORT || 5000,function(){
    console.log('Port start at 5000');
});

module.exports = app;
