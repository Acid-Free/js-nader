const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve(10), 3000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => resolve(20), 5000));

Promise.all([promise1, promise2]).then((resolve) => console.log(resolve.reduce((sum, num) => sum += num, 0)));