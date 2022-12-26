const countTo10 = function* () {
    let i = 0;
    while (i <= 10) {
        yield i;
        i++;
    }
};

const gen = countTo10();

for (counter of gen)
    console.log(counter);