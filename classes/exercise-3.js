/*
    1. Lookup the retro arcade game: Space Invaders
       on Google for some pictures
       Eg: https://en.wikipedia.org/wiki/Space_Invaders
    2. How would you build a class to model the Player
       (Spaceship) and the Enemy (Flying Alien)?
    3. Try to think of all the different fields and
       methods each would have in a real game. What 
       would you want to have in them?
    4. Write these out first on paper/text to 
       brainstorm, then implement the classes in JS
    * This is purposefully open-ended to allow you
      the creative freedom to design these classes
*/

// My solution doesn't involve inheritance (not discussed yet)

class Entity {
  attack(target) {
    target.health -= this.damage;
  }
}

class Player {
  constructor() {
    this.type = "Spaceship";
    this.health = 3;
    this.damage = 1;
  }
  attack(target) {
    target.health -= this.damage;
  }
}

class Enemy {
  constructor() {
    this.type = "Flying Alien";
    this.health = 1;
    this.damage = 1;
    this.distance = 10;
  }
}

Player.prototype.__proto__ = Entity.prototype;
Enemy.prototype.__proto__ = Entity.prototype;
