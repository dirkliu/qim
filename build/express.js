var express = require('express');

var app = express(); // the main app
app.use(express.static('public'));

var server = app.listen(80, function () {
    console.log('Server start');
})
