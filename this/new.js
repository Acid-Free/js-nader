function Hero(name) {
  this.name = name;
  this.greet = function () {
    console.log(this);
    console.log(`${this.name} is a hero`);
  };
}

const pantheon = new Hero("Pantheon");
pantheon.greet();
console.log(pantheon.__proto__.__proto__.constructor.name);
console.log(Object.getOwnPropertyNames("turtles"));