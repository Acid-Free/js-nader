class FancyArray extends Array {
  // my soln using existing Array.map()
  // mapWithLogging(callback) {
  //   let original = callback;
  //   callback = function () {
  //     const [arg1, arg2] = [arguments[0], arguments[1]];
  //     console.log(`Current: ${arg1}, After Callback: ${arg1 + arg2}`);
  //     return original.apply(this, arguments);
  //   };
  //   return super.map(callback);
  // }
  mapWithLogging(callback, thisArg = this) {
    let i = 0;
    let result = new FancyArray();
    for (const item of thisArg) {
      const mappedItem = callback(item, i++, thisArg);
      result.push(mappedItem);
      console.log(`Current: ${item}, After Callback: ${mappedItem}`);
    }
    return result;
  }
}

const arr = new FancyArray();
console.log(arr);
arr.push(1);
arr.push(2);
arr.push(3);

const mapped = arr.mapWithLogging((item, i) => item + i);
const arr2 = [0, 0, 1, 1];
const mapped2 = arr.mapWithLogging((item, i) => item + i, arr2);
console.log(mapped);
console.log(mapped2);
