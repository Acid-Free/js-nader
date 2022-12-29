const store = {
  name: null,
  stock: [
    {
      name: "candy",
      quantity: 100
    },
    {
      name: "fruit",
      quantity: 7
    },
    {
      name: "toys",
      quantity: 23
    },
  ]
};

const myStore = {};
myStore.name = "My Wonderful Store";
Object.setPrototypeOf(myStore, store);

const yourStore = {};
yourStore.name = "Not My Wonderful Store";
Object.setPrototypeOf(yourStore, store);

myStore.stock[1].quantity = 300;
console.log(myStore.name, myStore.stock);
console.log(yourStore.name, yourStore.stock);