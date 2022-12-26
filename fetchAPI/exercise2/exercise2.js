const requestPikachu = async () => {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

    const pikachuObject = await result.json();
    console.log(pikachuObject["sprites"]["other"]["official-artwork"]["front_default"]);
};

requestPikachu();