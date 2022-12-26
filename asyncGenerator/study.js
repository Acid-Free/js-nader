const generator = async function* () {
    let i = 0;
    while (true) {
        yield new Promise((resolve, reject) =>
            setTimeout(() => resolve(i), 500));
        i++;
    }
};

const gen = generator();

const getNum = async () => {
    for await (const promise of gen)
        // promise.then((resolve) => console.log(resolve));
        console.log(promise);

};

getNum()

