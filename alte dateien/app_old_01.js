function hallo(who) {
	console.log('Hallo ' + who());
}

function getName () {
	 return "Welt";
}

hallo(getName);

hallo(function() {
	return "Node.js";
})

var hi = function(w) {
	w("Hallo Welt im Node.JS Pattern");
}

hi(function(qwertz) {
	console.log(qwertz);
});

var logGreeting1 = function() {
	console.log("Hallo 1");
};

var logGreeting2 = function() {
	console.log("Hallo 2");
};

var logGreeting3 = function() {
	console.log("Hallo 3");
};

logGreeting1();

setTimeout(logGreeting2, 1000);

logGreeting3();

