var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	if (req.url.indexOf("/public") === 0) {
		fs.readFile("." + req.url, {}, function(err, data){
			if(err) {
				res.writeHead(404, {
					"Content-Type": "text/plain"
				});
				res.end("404 file not found")
			} else {
				var contenType = null;
				if (req.url.endsWith(".jpg")) {
					contentType = "image/jpg"
				} else if (req.url.endsWith(".bmp")) {
					contentType = "image/bmp"
				} else if (req.url.endsWith(".gif")) {
					contentType = "image/gif"
				} else if (req.url.endsWith(".png")) {
					contentType = "image/png"
				} else {
					contentType = "text/plain"
				}
				res.writeHead(200, {
					"Content-Type": contentType
				});
				res.end(data)
			}
		});
	} else if (req.url == "/") {
		res.writeHead(200, {
			"Content-Type": "text/html" //MIME-Type
		});
		res.end("<html><body><h1>Ich bin die Startseite</h1><img src='public/hund.jpg'></body></html>");
	} else if (req.url == "/about") {
		res.end("Ich bin die 'Über mich' Seite");
	} else {
		res.end("Hallo Welt: " + req.url);	
	}
});

server.listen(8080);