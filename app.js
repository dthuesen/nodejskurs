var a = {
	firstname: "Max",
	lastname: "Mustermann"
};

for(var key in a) {
	value = a[key]
	console.log(key + ": " + value);	
}

/*var l = [
	"element",
	"hallo welt",
	"attribut"
];

l.forEach(function(value, index) {
	console.log(value, index);
});

console.log(l.map(function(value, index) {
	return value.toUpperCase();
}));

console.log(l.filter(function(value, index) {
	return (value.indexOf("a") != -1);
}));*/

/*function Student() {
 
};

Object.defineProperty(Student.prototype, "name", {
	get: function() {
		return this.firstname + " " + this.lastname;
	},
	set: function(name) {
		var segments = name.split(" ");
		this.firstname = segments[0];
		this.lastname = "";
		for (let i=1; i< segments.length; i++) {
			this.lastname += segments[i] + " ";
		};
	}
});

var max = new Student();
max.name = "Max Freiherr von dem Mustermann";

console.log(max.name);*/


/*var a = {
	firstname: "Detlef",
	lastname: "von der Thüsen"
};

Object.defineProperty(a, "name", {
	get: function() {
		return this.firstname + " " + this.lastname;
	},
	set: function(name) {
		var segments = name.split(" ");
		this.firstname = segments[0];
		this.lastname = "";
		for (let i=1; i< segments.length; i++) {
			this.lastname += segments[i] + " ";
		};
	}
});

console.log(a.name);

a.name = "Max von und zu Südow";

console.log(a.name);*/