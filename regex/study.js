const sentence = "The quick brown fox jumps over the lazy dog.";

const regex = /the/gi;

// for (result of sentence.matchAll(regex))
//     console.log(result);
// console.log(sentence.match(regex));

const results = sentence.matchAll(regex);
let result;
do {
    result = results.next();
    console.log(result);
} while (!result.done);
