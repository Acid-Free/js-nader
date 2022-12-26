const baboon = Symbol("Monkey");
const gorilla = Symbol("Monkey");

console.log(typeof baboon, baboon.description);
console.log(typeof gorilla, gorilla.description);

console.log(baboon === gorilla);