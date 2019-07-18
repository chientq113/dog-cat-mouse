var Mouse = require('./Mouse');
var Cat = require('./Cat');
var Dog = require('./Dog');

var dog = new Dog();
var cat = new Cat();
var mouse = new Mouse('Mickey');

try {
	cat.eat(mouse);
	cat.eat(dog);	
} catch(error) {
	console.log('Error while cat eating a dog');
}

console.log(cat);
