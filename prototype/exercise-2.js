const fakeArray = {
  "0": "Zero",
  "1": "One",
  "oh yeah": "ok",
  "2": "Two",
  "length": 3,
  [Symbol.iterator]: function* () {
    yield* Object.entries(this);
  },
  __proto__: Array.prototype
};

const test = fakeArray.map(value => {
  // console.log(value);
  return value;
});
console.log(test);

const testArray = [];
for (entry of fakeArray)
  testArray.push(entry);

const test2 = testArray.map(value => {
  // console.log(value);
  return value;
});
console.log(test2);