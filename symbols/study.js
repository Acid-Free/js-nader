const character = {
    name: "Rick Axley",
    class: "Axe Wielder",
    quote: "I'll never let you down",
    [Symbol.iterator]: function* () {
        yield* [1, 2, 3];
    }
};

for (const entry of character)
    console.log(entry);
