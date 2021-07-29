// Constructor Pattern
// Creation of custom objects with regular usage

var Person = function(name, age, favFood) {
  this.name = name;
  this.age = age;
  this.favFood = favFood;
};

// Prototype is a template of properties and methods that object has.
// When we define methods and properties, any new instance of class inherits them and can access them.
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old, and my favorite food is ${this.favFood}`);
};

// Initialize new instance of Person and call greet method
var bob = new Person('Bob', 22, 'Chicken');
bob.greet();

// ES6 / ES2015 syntax
class Vehicle {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
  getSpecs() {
    console.log(`Type: ${this.type}, Color: ${this.color}`);
  }
};

var someTruck = new Vehicle('Truck', 'red');
someTruck.getSpecs();
