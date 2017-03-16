var express = require("express");

var app = express();

app.get('/api/whoami', function(req, res){
    // console.log(req.headers);
    var output = {"ipaddress":req.headers['x-forwarded-for'] , "language": req.headers['accept-language'].split(',')[0], "software":req.headers['user-agent'].split('(')[1].split(')')[0]};
    res.end(JSON.stringify(output));
});

app.listen(8080);