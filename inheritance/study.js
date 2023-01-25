class Player {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }

  speak(phrase) {
    console.log(`${this.name} says: ${phrase}`);
  }
}

class Warrior extends Player {
  constructor(name, hp, mp, items, shield) {
    super(name, hp, mp, items);
    this.shield = shield;
    super.speak("Rawr!");
  }
  speak(phrase) {
    console.log(`${this.name} says: ${phrase}, but a warrior doesn't need a sword.`);
  }
}

const warrior1 = new Warrior("Thorfinn", 100, 1, ["dagger1", "dagger2"], "willpower");

warrior1.speak("Askelaaaaaaaaaaaaaaaaaaadd!!");