const randomNumber = function* () {
    while (true) {
        yield Math.random();
    }
};

const gen = randomNumber();

for (let i = 0; i < 10; ++i)
    console.log(gen.next().value);