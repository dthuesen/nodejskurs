var http = require('http');

var server = http.createServer(function(req, res) {
	res.end('Hallo Welt');	
});

server.listen('8080');