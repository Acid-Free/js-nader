const wrapperFunction = () => {
  const prices = [10, 28, 99, 3];

  const logPrices = () => {
    console.log(prices);
    return "yeahn boi";
  };

  return logPrices;
};

const test = wrapperFunction();

console.log(
  test());