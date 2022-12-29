const wrapperFunction = () => {
  const prices = [10, 28, 99, 3];

  const logPrices = () => {
    console.log(prices);
    return "yeahn boi";
  };

  return logPrices;
};

const test = wrapperFunction();

// console.log(test());

const test1 = (param) => {
  let string = param ?? "yeah boi";
  // console.log("this is the test function");
  return string;
};

const executeTest1 = test1;
console.log(executeTest1());

const executeTest2 = test1;
console.log(executeTest2("oh yeah"));

const executeTest3 = test1();
console.log(executeTest3);
