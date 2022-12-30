function ThisPerson(name, age, favoriteFood) {
  this.name = name;
  this.age = age;
  this.favoriteFood = favoriteFood;
}

function ProtoPerson(name, age, favoriteFood) {
  const instance = {
    name,
    age,
    favoriteFood,
  };

  // this is the solution, I need to assign the prototype of ProtoPerson, not itself
  instance.__proto__ = ProtoPerson.prototype;

  return instance;
}

const thisPerson = new ThisPerson("This", 0, "cookies");
const protoPerson = ProtoPerson("Proto", 1, "?");

console.log(thisPerson.__proto__.constructor.name);
console.log(protoPerson.__proto__.constructor.name);