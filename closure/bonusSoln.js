const pokemonDownloader = () => {
  let pokemonCache = {};
  const baseURL = "https://pokeapi.co/api/v2/pokemon/";

  const download = async (pokemonName) => {
    if (pokemonCache[pokemonName]) {
      console.log(`${pokemonName} was in the Cache`);
      return pokemonCache[pokemonName];
    } else {
      const response = await fetch(baseURL + pokemonName);
      const json = await response.json();
      console.log(`${pokemonName} fetched from the API`);
      pokemonCache[pokemonName] = json;
      return json;
    }
  };

  return download;
};

const performPokemonSearch = async () => {
  const getPokemon = pokemonDownloader();
  const mew = getPokemon("mew");
  console.log(mew);
};

performPokemonSearch();