var http = require('http');

http.createServer(function (req, res) {
	 res.writeHead(200,
	 	{'content-type': 'text/plain; charset=utf-8'});
	 res.write('Hello ');
	 res.end('World....oder?\n');
}).listen(8080, '127.0.0.1');
console.log("Webserver wird ausgeführt")