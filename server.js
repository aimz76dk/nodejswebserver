  
  var http = require('http');

    var server = http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/json'});
      res.write(`{ "title" : "Hello World", "Text" : "This is my first web api" }`);
      res.end();
    }); 


    server.listen(process.env.PORT || 5000);





