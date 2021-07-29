// Factory simplifies objects creation and new object instances

// Prepare two types of objects
function Cat(options) {
  this.sound = 'Meow';
  this.name = options.name;
}

function Dog(options) {
  this.sound = 'Rawr';
  this.name = options.name;
}

// Animal Factory
function AnimalFactory() {}

// Type Cat by default
AnimalFactory.prototype.animalType = Cat;

// Method for new animals creation
AnimalFactory.prototype.createAnimal = function(options) {
  switch(options.animalType) {
    case "cat":
      this.animalType = Cat;
      break;
    case "dog":
      this.animalType = Dog;
      break;
    default:
      this.animalType = Cat;
      break;
  }
  return new this.animalType(options);
}

var animalFactory = new AnimalFactory();

var doge = animalFactory.createAnimal({
  animalType: 'dog',
  name: 'Doge'
});

var snowball = animalFactory.createAnimal({name: 'Snowball'});
