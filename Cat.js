function Cat() { 
	this.Stomach = [];
}

Cat.prototype.eat = function(mouse) {
	this.Stomach.push(mouse);
};

module.exports = Cat;