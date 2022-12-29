const pokemonDownloader = () => {
  const pokemonCache = {};

  const download = async (pokemonName) => {
    pokemonName = pokemonName.trim().toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const pokemonRequest = await fetch(url);

    try {
      const pokemonObject = await pokemonRequest.json();

      console.log(pokemonObject);

      if (pokemonName in pokemonCache)
        console.log(`${pokemonName} entry found in cache.`);
      else {
        pokemonCache[pokemonName] = pokemonObject;
        console.log(`${pokemonName} fetched from API.`);
      }
    } catch (e) {
      console.log(`${pokemonName} is not a pokemon.`);
    }


  };

  return download;
};

const requester1 = pokemonDownloader();
requester1("PikaChu");
requester1("Pikachu");
requester1("");
requester1("");