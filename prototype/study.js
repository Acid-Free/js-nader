const animal = {
  type: "monkey"
};

console.log(Object.getPrototypeOf(animal).__proto__);

Object.prototype.speak = () => {
  console.log("I am speaking.");
};

console.log(Object.getPrototypeOf(animal));

animal.speak = () => {
  console.log("I am a speaking animal.");
};

animal.__proto__.yeah = () => {
  console.log("yeah.");
};

// animal.speak();

console.log(Object.__proto__);