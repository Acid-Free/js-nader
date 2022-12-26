console.log("Program started");
const aPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            "Step 1 complete",
            new Promise((resolve, reject) => {
                setTimeout(() => resolve("Step 2 complete"), 3000);
            })
        ]);
    }, 3000);
});
console.log(aPromise);
aPromise
    .then((resolve) => {
        console.log(resolve[0]);
        return resolve[1];
    }).then((resolve) => console.log(resolve));