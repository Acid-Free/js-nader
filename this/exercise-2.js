const book = {
  name: "Harry Potter",
  author: "J.K. Rowling",
  characters: {
    mainChars: ["Harry", "Ron", "Hermione"],
    list: function () {
      for (const char of this.mainChars) {
        console.log(char);
      }
    }
  }
};

const betterMainCharsList = book.characters.list.bind({ mainChars: ["Draco", "Severus", "Voldemort"] });

betterMainCharsList();
betterMainCharsList();