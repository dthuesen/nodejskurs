var http = require('http');

var server = http.createServer(function(req, res) {
	res.end("Hallo Welt: " + req.url);
});

server.listen(8080);