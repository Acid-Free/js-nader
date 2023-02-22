console.log("Program started");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Step 1 complete");
  }, 1000);
});

// myPromise.then((resolve) => {
//     console.log(resolve);

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Step 2 complete");
//         }, 3000);
//     });
// }).then((resolve) => {
//     console.log(resolve);
// });

myPromise.then(done);

function done() {
  console.log("done");
}
