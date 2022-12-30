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

book.characters.list();
book.characters.list.apply({ mainChars: ["Draco", "Severus", "Voldemort"] });