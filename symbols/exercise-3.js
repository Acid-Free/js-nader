const book = {
    name: "1984", author: "George Orwell", year: 1949, rating: 4.6, genre: "Science Fiction", movie: true, [Symbol.asyncIterator]: async function* () {
        const entries = Object.entries(book);
        for (const entry of entries)
            yield new Promise((resolve, reject) =>
                setTimeout(() => resolve(entry), 1000));
    }
};

const printBookEntries = async () => {
    for await (const entry of book)
        console.log(entry);
};

printBookEntries();