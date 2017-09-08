var http = require('http');
var fs = require('fs');



var server = http.createServer(function(req, res) {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    res.writeHead(200, {'Content-type' : 'text/json'});
    res.write(fs.readFile('index.html', 'utf-8'));
    res.end();
});

server.listen(process.env.PORT || 3003);

