var http = require('http');
var fs = require('fs');
var title = require('title');

title.setTitle('this is the title');


var server = http.createServer(function(req, res) {
    
    fs.readFile('index.html', 'utf-8', function (err, data) {
            
        res.setHeader('Access-Control-Allow-Origin', '*');

        res.writeHead(200, {'Content-type' : 'text/html'})
        res.write(title.getTitle().toString());
        res.write(data.toString());
        res.end();
    });   
});

server.listen(process.env.PORT || 3003);

