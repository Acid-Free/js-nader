function Person(name) {
  this.name = name;
}

const cleo = Person("Cleo");
const taylor = new Person("Taylor");

// console.log(Object.getOwnPropertyNames(cleo));
console.log(Object.getOwnPropertyNames(taylor.__proto__.constructor));