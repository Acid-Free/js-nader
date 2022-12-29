const createCounter = () => {
  let counter = 0;
  const incrementCounter = () => {
    console.log(++counter);
  };
  return incrementCounter;
};

const counter = createCounter();
counter();
counter();
counter();
counter();