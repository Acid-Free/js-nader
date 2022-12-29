const createVendingMachine = () => {
  const stock = ["Cola", "Chips", "Chocolate", "Juice", "Nuts"];
  let coins = 0;

  const add25 = () => {
    coins += 25;
    if (coins >= 100) {
      const randomItem = stock[Math.floor(Math.random() * stock.length)];
      console.log(`You got some ${randomItem}`);
      coins -= 100;
    }
    else if (coins < 100) {
      const moreCoinsNeeded = 100 - coins;
      console.log(`Insert ${moreCoinsNeeded} more coins`);
    }
  };

  return add25;
};

const vendingMachine = createVendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
vendingMachine()


