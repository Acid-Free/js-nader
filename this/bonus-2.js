function Person(name, age, favoriteFood) {
  this.name = name;
  this.testAge = age;
  this.favoriteFood = favoriteFood;
}

Person.prototype.greet = function () {
  console.log(`${this.name} says hello!`);
};

function Superhero(name, age, favoriteFood) {
  this.name = name;
  this.testAge = age;
  this.favoriteFood = favoriteFood;
  this.overpowered = true;

  this.__proto__.__proto__ = Person.prototype;
  // this.__proto__ = new Person(name, age, favoriteFood).__proto__;
}

// Superhero.prototype.__proto__ = Person.prototype;

const anya = new Person("Anya", 40, "Sour Keys");
const batman = new Superhero("Bruce", 55, "Steak", true);
batman.greet.apply({ name: "Superman" });

let proto = batman.__proto__;
while (proto) {
  console.log(proto.constructor.name);
  proto = proto.__proto__;
}