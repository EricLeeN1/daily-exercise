var express = require('express');

var app = express();
var greet = express.Router();
greet.get('/jq', function (req, res) {
    console.log(req.baseUrl); // greet
    res.send('Konichiwa!');
});
// app.use('/greet', greet);
app.use(['/gre+t', '/hel{2}o'], greet);
app.listen(3000);