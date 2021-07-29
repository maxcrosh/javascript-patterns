// Decorator helps to add new functionality to object`s methods
var Person = function (name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
}

var uniqueBob = new Person('Bob');

uniqueBob.hobbies = ['Cooking', 'Running'];

uniqueBob.greet = function() {
  Person.prototype.greet.call(this);
  console.log('My hobbies are: ', this.hobbies);
};

uniqueBob.greet();
