function Person(name, age, favoriteFood) {
  this.name = name;
  this.testAge = age;
  this.favoriteFood = favoriteFood;
}

const avery = Person("Avery", 20, "Dark Chocolate");
const jackie = new Person("Jackie", 35, "Sourdough Bread");

// console.log(avery);
// console.log(jackie)

console.log(jackie.__proto__.constructor.name, Object.getOwnPropertyNames(jackie.__proto__));


console.log(jackie.__proto__.__proto__.constructor.name, Object.getOwnPropertyNames(jackie.__proto__.__proto__));