const pet = {
  name: "Nemo",
  type: "fish",
  age: 2
};

const goodPet = {
  name: "Pocholo",
  type: "dog",
  age: 5
};

Object.prototype.sayHello = function () {
  console.log(`${this.name} is a ${this.type} and is ${this.age} years old. ${this.name} says hi!`);
};

pet.sayHello();
goodPet.sayHello();