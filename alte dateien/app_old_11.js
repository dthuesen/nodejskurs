var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	if (req.url == "/public/hund.jpg") {
		res.writeHead(200, {
			"Content-Type": "image/jpg" //MIME-Type
		});
		// Auf diese Weise würde der Browser synchron laden
		// und ausgebremst werden:
		// var image = fs.readFileSync("public/hund.jpg")
		// res.end(image);
		// Besser asynchron:
		fs.readFile("public/hund.jpg", {}, function(err, data){
			res.end(data);
		})
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