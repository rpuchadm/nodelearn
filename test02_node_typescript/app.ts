/// <reference path='typings/node/node.d.ts' />


// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
var port : number = 8000;
server.listen( port);

// Put a friendly message on the terminal
var msg : string = "Server running at http://127.0.0.1:" + port + "/"
console.log( msg);
