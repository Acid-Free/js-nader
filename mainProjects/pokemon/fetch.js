const fetchPokemon = async (name) => {

    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let returnObject = {};

    // name.length => 0 returns all pokemon entries
    if (name.length === 0)
        return returnObject;

    try {
        returnObject = await result.json();
    } catch (e) {
    }

    return returnObject;
};

const fetchImage = async (url) => {
    const result = await fetch(url);
    return result;
};

export { fetchImage };
export default fetchPokemon;