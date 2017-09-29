var express = require('express');
var app = express();

app.get('/:id', function (req, res) {
    //http://127.0.0.1:3000/search?q=tobi+ferret
    console.log(req.fresh);//   false
    console.log(req.hostname);//    127.0.0.1
    console.log(req.ip);//  ::ffff:127.0.0.1
    console.log(req.ips);// []
    console.log(req.params);//  { id: 'search' }
    console.log(req.path);//    /search
    console.log(req.protocol);//    http
    console.log(req.query);//   { q: 'tobi ferret' }
    console.log(req.query.q);//   tobi ferret
    console.log(req.route);
    // Route
    // {
    //     path: '/:id',
    //         stack
    // :
    //     [Layer {
    //         handle: [Function],
    //         name: '<anonymous>',
    //         params: undefined,
    //         path: undefined,
    //         keys: [],
    //         regexp: /^\/?$/i,
    //         method: 'get'
    //     }],
    //         methods
    // :
    //     {
    //         get: true
    //     }
    // }

    console.log(req.subdomains);//  []
    console.log(req.xhr);// false
    console.log(req.is('html'));// null

});
app.listen(3000);