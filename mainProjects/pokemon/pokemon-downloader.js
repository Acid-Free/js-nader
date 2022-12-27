import fsp from "fs/promises";
import fs from "fs";
import path from "path";
import prompt from "./prompts.js";
import fetchPokemon, { fetchImage } from "./fetch.js";

const getPromptObject = async () => {
    const promptObject = await prompt();
    const pokemonObject = await fetchPokemon(promptObject.name);

    const downloadDir = `./pokemon-storage/${pokemonObject.name}`;
    if (!fs.existsSync(`${downloadDir}/`))
        fsp.mkdir(downloadDir);

    let stats = "";
    for (const stat of pokemonObject.stats) {
        const [statName, statValue] = [stat.stat.name, stat.base_stat];
        stats += `${statName}: ${statValue}\n`;
    }

    fsp.writeFile(`${downloadDir}/stats.txt`, stats);


    // sprites

    const spriteURLs = [];
    const validImages = ["back_default", "back_female", "back_shiny", "back_shiny_female", "front_default", "front_female", "front_shiny", "front_shiny_female"];

    for (const sprite of Object.entries(pokemonObject.sprites))
        if (validImages.includes(sprite[0])) {
            const result = await fetchImage(sprite[1]);
            const buffer = Buffer.from(await result.arrayBuffer());
            fsp.writeFile(`${downloadDir}/${sprite[0]}.png`, buffer);
        }

    // artwork
    const result = await fetchImage(pokemonObject["sprites"]["other"]["official-artwork"]["front_default"]);
    const buffer = Buffer.from(await result.arrayBuffer());
    fsp.writeFile(`${downloadDir}/original-artwork.png`, buffer);
};

getPromptObject()



