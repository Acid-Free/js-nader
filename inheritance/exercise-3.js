class Entity {
  constructor(sprite, name, health, damage) {
    this.sprite = sprite;
    this.name = name;
    this.health = health;
    this.damage = damage;
  }
  shoot() {
    console.log(`${this.name} shoots a projectile that can deal ${this.damage} damage`);
  }
}

class Enemy extends Entity {
  constructor(sprite, name, health, damage, posX, posY) {
    super(sprite, name, health, damage);
    this.posX = posX;
    this.posY = posY;
  }
  moveX(offset) {
    this.posX += offset;
  }
  moveY(offset) {
    this.posY += offset;
  }
}

class Player extends Entity {
  constructor(sprite, name, health, damage, posX) {
    super(sprite, name, health, damage);
    this.posX = posX;
  }
  moveX(offset) {
    this.posX += offset;
  }
}

const smallInvader = new Enemy("img1", "Small Invader", 1, 1, 0, 10);
const mediumInvader = new Enemy("img2", "Medium Invader", 1, 2, 0, 9);
const player = new Enemy("img3", "Spaceship", 3, 1, 5, 0);

player.moveX(-2);

console.log(player.posX);
console.log(player.sprite);
console.log(smallInvader.sprite);
console.log(mediumInvader.sprite);