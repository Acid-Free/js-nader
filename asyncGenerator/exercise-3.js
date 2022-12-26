const timeGen = async function* (time) {
    while (true) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(time);
            }, time);
        });
        time *= 2;
    }
};

const gen = timeGen(100);

const executeTime = async () => {
    for await (time of gen) {
        console.log(time);
    }
};

executeTime();