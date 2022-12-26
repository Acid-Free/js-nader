const sentenceGen = async function* (sentence) {
    for (char of sentence) {
        yield new Promise((resolve, reject) =>
            setTimeout(() =>
                resolve((["a", "e", "i", "o", "u"].includes(char))
                    ? "*"
                    : char.toUpperCase())
                , 100
            )
        );
    }
};

const gen = sentenceGen("Monkeys are the coolest animal!");

const executeGen = async () => {
    for await (promise of gen)
        console.log(promise);
};

executeGen();