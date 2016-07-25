var http = require('http');

var requestCount = 0;

var server = http.createServer(function(req, res) {
	requestCount = requestCount + 1;
	res.end("Zugriff: " + requestCount);
});

server.listen(8080);