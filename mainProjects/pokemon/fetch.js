const fetchPokemon = async (name) => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let returnObject = {};

    try {
        returnObject = await result.json();
    } catch (e) {
        returnObject = { name: "MissingNo." };
    }

    return returnObject;
};

export default fetchPokemon;