const thor = {
  name: "Thor"
};

const jade = {
  name: "Jade"
};

Object.prototype.greet = function () {
  console.log(`${this.name} greets`);
};

thor.greet();
jade.greet();