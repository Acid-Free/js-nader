const square = function (number) {
    return Math.pow(number, 2);
};

const greeting = (name) => console.log(`Hello ${name}!`);

export { square as NAMED, greeting as default };
