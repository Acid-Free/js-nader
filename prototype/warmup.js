String.prototype.boop = () => {
  console.log("Boop!");
};

const cat = "meow";

cat.__proto__.boop();
cat.boop();