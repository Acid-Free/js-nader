const getRandomNumber = function* () {
    let i = 0;
    while (i < 5) {
        yield Math.floor(Math.random() * 11);
        i++;
    }
};

const groceryList = function* () {
    const groceries = ["Avocado", "Cookie", "Milk", "Soup", "Soda"];
    while (groceries.length > 0) {
        yield groceries.splice(Math.floor(Math.random() * groceries.length), 1)[0];
    }
};

const genNum = getRandomNumber();
const genGrocery = groceryList();

for (let i = 0; i < 5; ++i) {
    console.log(genNum.next().value, genGrocery.next().value);
}