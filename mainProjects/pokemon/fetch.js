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

const fetchImage = async (url) => {
    const result = await fetch(url);
    return result;
};

export { fetchImage };
export default fetchPokemon;