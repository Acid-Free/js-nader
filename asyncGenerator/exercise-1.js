const randomGen = async function* () {
    while (true)
        yield (Math.random() > 0.5)
            ? new Promise((resolve, reject) => setTimeout(() => resolve("Fast!"), 500))
            : new Promise((resolve, reject) => setTimeout(() => resolve("Slow!"), 3000));

};

const gen = randomGen();

const executeRandomGen = async () => {
    for await (promise of gen)
        console.log(promise);
};

executeRandomGen();