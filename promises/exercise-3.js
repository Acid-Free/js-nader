console.log("Program started");
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ data: "Hello, frield", error: null });
    }, 5000);
});

console.log(promise1);

promise1.then((resolve) => {
    console.log(resolve);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("First promise chain complete");
        }, 2000);
    });
}).then((resolve) => {
    console.log(resolve);
});

promise1.then((resolve) => {
    console.log(resolve);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Second promise chain complete!");
        }, 10000);
    });
}).then((resolve) => {
    console.log(resolve);
});