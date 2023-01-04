class Animal {
  static knownMammals = [];
  mammal = false;
  eyes = 2;

  static isMammal() { }
  describe() { }
}

class Monkey extends Animal {
  static knownMonkeys = [];
  height;
  weight;

  static isCute() { }
  eatBanana() { }
}

const animal = new Animal();
// console.log(Object.getOwnPropertyNames(animal));
// // mammal, eyes
// console.log(Object.getOwnPropertyNames(animal.__proto__));
// // describe, constructor
// console.log(Object.getOwnPropertyNames(Animal));
// // length, name, prototype, isMammal, knownMammals
// console.log(Object.getOwnPropertyNames(Animal.__proto__));
// // describe, constructor X
// console.log(Animal.prototype.__proto__.constructor.name);

const monkey = new Monkey();
// console.log(Object.getOwnPropertyNames(monkey));
// // mammal, eyes, height, weight
// console.log(Object.getOwnPropertyNames(monkey.__proto__));
// // constructor, eatBanana
// console.log(Object.getOwnPropertyNames(Monkey));
// // length, name, prototype, knownMonkeys, isCute
// console.log(Object.getOwnPropertyNames(Monkey.__proto__));
// // length, arguments, constructor, bind, toString, name, caller, apply, call

// console.log(Monkey.__proto__.constructor.name);
// console.log(monkey.__proto__.__proto__.constructor.name)

// console.log(Object.getOwnPropertyNames(Function.__proto__));
// console.log(Object.getOwnPropertyNames(Function.prototype));
// console.log(Animal);

console.log(Object.getOwnPropertyNames(Animal.prototype));
