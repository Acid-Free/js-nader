const fetchPokemon = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Danger, boi!"));
        }, 2000);
    });
};

const showPokemon = async () => {
    try {
        const pokemonData = await fetchPokemon();
        console.log(pokemonData);
    } catch (e) {
        console.error(e);
    }
};

const main = async () => {
    await showPokemon();
    console.log("Program complete!");
};

main();