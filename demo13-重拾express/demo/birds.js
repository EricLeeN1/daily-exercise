var express = require('express');
var app = express();
var birds = require('./bird');

app.use('/bird', birds);
app.listen(3000);