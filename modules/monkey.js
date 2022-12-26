const monkey = {
    name: "Moon",
    age: 5
};

const printMonkey = () => new Promise((resolve, reject) => setTimeout(() => {
    resolve(monkey);
}, 2000));
const printMyName = () => console.log("scd");

const resultMonkey = await printMonkey();
export { resultMonkey as default };