class Person {
  constructor(name, age, equipment) {
    this.name = name;
    this.age = age;
    this.equipment = equipment;
  }
  speak(phrase) {
    console.log(phrase);
  }
}


function fakePerson(name, age, equipment, fake) {
  this.name = name;
  this.age = age;
  this.equipment = equipment;
  this.fake = fake;
  // phrase will be inside the instance of fakePerson, not the prototype
  // this.speak = function (phrase) {
  //   console.log(phrase);
  // };
}

fakePerson.prototype.speak = function (phrase) {
  console.log(phrase);
};

const sian = new Person("Sian", 21, ["keyboard", "mouse"]);
// console.log(sian.__proto__.__proto__.constructor.name);
console.log(Object.getOwnPropertyNames(sian.__proto__));
// console.log(Object.getOwnPropertyNames(sian.__proto__));

const caleb = new fakePerson("Pooh", 99, ["monitor", "knife"], true);

console.log(Object.getOwnPropertyNames(caleb.__proto__));