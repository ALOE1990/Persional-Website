"use strict"
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));
app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(app.get('port'), function () {
    console.log('web server is listening on port 3000');
});