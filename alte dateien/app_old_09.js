var http = require('http');

var requestCount = 0;

var server = http.createServer(function(req, res) {
	setTimeout(function() {
		res.end("Hallo Welt");
	}, 1000)
	
});

server.listen(8080);