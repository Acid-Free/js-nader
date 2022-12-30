const alex = {
  name: "Alex",
  greet: function () {
    // console.log(this);
    console.log(`${this.name} says hi!`);
  },
  arrowGreet: () => {
    // console.log(this);
    console.log(`${this.name} says hi!`);
  },
  friend: {
    name: "Lee",
    greet: function (...args) {
      console.log(args);
      console.log(`${this.name} says hi!`);
    },
  }
};

// alex.greet();
// alex.arrowGreet();
alex.friend.greet.call({ name: "Rob" }, 'a, ', 2, false, null, undefined);

// console.log(Object.getOwnPropertyNames(Object.prototype));

const boundGreet = alex.greet.bind({ name: "George", age: 19 });

boundGreet();

alex.greet = alex.greet.bind({ name: "Iron Man" });
alex.greet();