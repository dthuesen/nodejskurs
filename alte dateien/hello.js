console.log("Hallo aus der hello.js Datei");

var data = {
	name: function(prefix) {
		return prefix + "Welt";
	}
}

module.exports = data;