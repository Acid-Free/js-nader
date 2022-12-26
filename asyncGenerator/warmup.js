const aGenerator = async function* () {
    while (true)
        yield new Promise((resolve, reject) => setTimeout(() => resolve(Math.floor(Math.random() * 10)), 1000));
};

const gen = aGenerator();

const printInfinity = async () => {
    for await (promise of gen)
        console.log(promise);
};

printInfinity();