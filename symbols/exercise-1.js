const movie = { name: "Blade Runner", director: "Ridley Scott", year: 1982, rating: 89, genre: "Science Fiction" };

movie[Symbol("budget")] = 30;
movie[Symbol("boxOffice")] = 41.6;

for (const [key, value] of Object.entries(movie))
    console.log(`${key} => ${value}`);

console.log(Object.getOwnPropertySymbols(movie));