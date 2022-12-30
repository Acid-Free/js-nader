class Animal {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

const dog = new Animal("dog", "Pocholo");
const mole = new Animal("mole", "Mol");

console.log(dog);
console.log(mole);

mole.name = "Awesome Mole";

console.log(mole);