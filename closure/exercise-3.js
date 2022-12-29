const createDatabase = () => {
  const storage = ["Appla", "Banana", "Carrot"];

  const addToDB = (item) => {
    storage.push(item);
    console.log(storage);
  };

  const clearDB = () => {
    storage.length = 0;
  };

  return [addToDB, clearDB];
};

const [add, clear] = createDatabase();
add("Dog");
add("Ear");
clear();
add("Zebra");