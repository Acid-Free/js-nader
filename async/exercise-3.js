const goGetCandies = () =>
    new Promise((resolve, reject) =>
        setTimeout(() =>
            resolve({ candy: "sour keys", quantity: 10 }), 2000));

const sellCandies = (candy) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cost = candy.quantity * 25;
            resolve(cost);
        }, 3000);
    });
};

const processCandies = async () => {
    const candy = await goGetCandies();
    const revenue = await sellCandies(candy);
    console.log(revenue);
};

// goGetCandies().then((resolve) =>
//     sellCandies(resolve)).then((resolve) =>
//         console.log(resolve));

processCandies();