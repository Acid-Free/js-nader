class Utilities {
  static camelCase(str) {
    str = str.toLowerCase();
    const words = str.split(" ");
    return words.reduce((result, word, index) => {
      const upperCasedWord = word[0].toUpperCase() + word.substring(1);
      return result += upperCasedWord;
    });
  }
}

console.log(Utilities.camelCase("Test Another Word"));

console.log(Utilities.camelCase("hello there"));
// helloThere
console.log(Utilities.camelCase("HELLO THERE"));
// helloThere
console.log(Utilities.camelCase("I love cookies"));
// iLoveCookies
console.log(Utilities.camelCase("Monkey Banana"))
// monkeyBanana