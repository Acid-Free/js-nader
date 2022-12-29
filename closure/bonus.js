const pokemonDownloader = () => {
  const pokemonCache = {};

  const download = async (pokemonName) => {
    pokemonName = pokemonName.trim().toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    // console.log(pokemonObject);
    console.log(Object.entries(pokemonCache).length);

    if (pokemonName in pokemonCache)
      console.log(`${pokemonName} entry found in cache.`);
    else {
      try {
        const pokemonRequest = await fetch(url);
        const pokemonObject = await pokemonRequest.json();

        console.log(`${pokemonName} fetched from API.`);

        pokemonCache[pokemonName] = pokemonObject;
        console.log(Object.keys(pokemonCache));
      } catch (e) {
        console.log(`${pokemonName} is not a pokemon.`);
      }
    };
  };

  return download;
};

const requester1 = async () => {
  const requester = pokemonDownloader();
  await requester("definitely a pokemon");
  await requester("pikachu");
  await requester("pikachu");
  await requester("machop");
  await requester("pikachu");
  await requester("raichu");
  await requester("pikachu");
  await requester("pikachu");
  await requester("pikachu");
  await requester("pikachu");
};

requester1();