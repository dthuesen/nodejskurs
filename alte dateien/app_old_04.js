function Person(vorname, nachname) {
	this.vorname = vorname;
	this.nachname = nachname;
}

Person.prototype.getName = function() {
	return this.vorname + " " + this.nachname;
}

var hans = new Person("Hans", "Müller");
console.log(hans.getName())

var p = {
	vorname: "Erik",
	nachname: "Maier"
};

p.__proto__ = Person.prototype;

function Schueler(vorname, nachname, uni) {
	this.vorname = vorname;
	this.nachname = nachname;
	this.uni = uni;
}

Schueler.prototype.__proto__ = Person.prototype;

Schueler.prototype.getName = function() {
	return this.vorname + " " + this.nachname + " (" + this.uni +")";
}

var erik = new Schueler("Erik", "Müller", "TU München");


console.log(p.getName());
console.log(Person.p);
console.log(erik.getName());