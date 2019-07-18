var Mouse = require('./Mouse');

function Cat() { 
	this.Stomach = [];
}

Cat.prototype.eat = function(animal) {
	if (animal instanceof Mouse) {
		this.Stomach.push(animal);
	} else {
		throw new Error('Cat can only eat mouse!');
	}
	
};

module.exports = Cat;