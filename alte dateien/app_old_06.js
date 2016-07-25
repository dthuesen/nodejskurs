var util = require('util');

function Person(vorname, nachname) {
	this.vorname = vorname;
	this.nachname = nachname;
}

Person.prototype.getName = function() {
	return this.vorname + " " + this.nachname;
}

function Schueler(vorname, nachname, uni) {
	this.vorname = vorname;
	this.nachname = nachname;
	this.uni = uni;
}

Schueler.prototype.getName = function() {
	return this.vorname + " " + this.nachname + " (" + this.uni +")";
}

util.inherits(Schueler, Person);
// Schueler.prototype.__proto__ = Person.prototype;

var erik = new Schueler("Erik", "Müller", "TU München");
var hans = new Person("Hans", "Maier");

console.log(erik.getName());
console.log(hans.getName());