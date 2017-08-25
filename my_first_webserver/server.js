  
  var http = require('http');

    var server = http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/json'});
      res.end(`{ "title" : "Hello World", "Text" : "This is my first web api" }`);
    });

    server.listen(3000);






