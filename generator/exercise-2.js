const randomAmountFromRange = function* (amount, min, max) {
    let i = 0;
    while (i < amount) {
        yield Math.floor(Math.random() * (max - min + 1) + min);
        ++i;
    }
};

const gen = randomAmountFromRange(10, 5, 10);

for (randomNum of gen)
    console.log(randomNum);