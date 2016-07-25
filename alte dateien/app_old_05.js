/*var logThis = function() {
	console.log(this);
};

var logThisBound = logThis.bind({
	vorname: "Max"
});

logThisBound();*/

var logMessage = function(a, b) {
	console.log(this, a, b);
}

/*logMessage.call({
	vorname: "Max"
}, 3, 4);*/

logMessage.apply({
	vorname: "Max"
}, [3, 4]);

