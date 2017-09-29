var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.download(__dirname + '/Response.md', 'readme.md', function (err) {
// Handle error, but keep in mind the response may be partially-sent
//         console.log(err);
// so check res.headersSent
        if (err) {
            console.log(err);
        } else {
// decrement a download credit, etc.
        }
    });
    // res.json({user:'tobi'});
    // res.jsonp({user:'tobi'});
});
app.listen(3000);