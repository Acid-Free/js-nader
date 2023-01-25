/*
    Let's see how a "Factory" class/function might work
    1. Create a class called "EnemyFactory"
    2. Make the following work to produce the output shown:
    const factory = new EnemyFactory();
    const flying = factory.generateFlyingEnemy("batman");
    flying.fly(); // batman can fly!
    const swimming = EnemyFactory.generateSwimmingEnemy("aquaman");
    swimming.swim(); // aquaman can swim!
    * What is the difference between these two? When might you
      even use this? Where are the property keys of each of these:
      - EnemyFactory
      - factory
      - factory.__proto__
      - flying.__proto__
      - swimming.__proto__
*/

class FlyingEnemy {
  constructor(name) {
    this.name = name;
  }
  fly() {
    console.log(`${this.name} can fly!`);
  }
}

class SwimmingEnemy {
  constructor(name) {
    this.name = name;
  }
  swim() {
    console.log(`${this.name} can swim!`);
  }
}

class EnemyFactory {
  generateFlyingEnemy(name) {
    return new FlyingEnemy(name);
  }
}

EnemyFactory.generateSwimmingEnemy = function (name) {
  return new SwimmingEnemy(name);
};

const factory = new EnemyFactory();
const flying = factory.generateFlyingEnemy("batman");
const swimming = EnemyFactory.generateSwimmingEnemy("aquaman");
flying.fly();
swimming.swim();

console.log("EnemyFactory", Object.getOwnPropertyNames(EnemyFactory));
console.log("factory", Object.getOwnPropertyNames(factory));
console.log("factory.__proto__", Object.getOwnPropertyNames(factory.__proto__));
console.log("flying.__proto__", Object.getOwnPropertyNames(flying.__proto__));
console.log("swimming.__proto__", Object.getOwnPropertyNames(swimming.__proto__));