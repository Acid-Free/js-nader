import fsp from "fs/promises";
import { fetchImage } from "./fetch.js";

const writeStats = async (pokemonObject, downloadDir) => {
    console.log("Downloading stats...");

    let stats = "";
    for (const stat of pokemonObject.stats) {
        const [statName, statValue] = [stat.stat.name, stat.base_stat];
        stats += `${statName}: ${statValue}\n`;
    }

    fsp.writeFile(`${downloadDir}/stats.txt`, stats);
};

const writeSprites = async (pokemonObject, downloadDir) => {
    console.log("Downloading sprites...");

    const spriteURLs = [];
    const validImages = ["back_default", "back_female", "back_shiny", "back_shiny_female", "front_default", "front_female", "front_shiny", "front_shiny_female"];

    for (const sprite of Object.entries(pokemonObject.sprites))
        if (validImages.includes(sprite[0])) {
            try {
                const result = await fetchImage(sprite[1]);
                const buffer = Buffer.from(await result.arrayBuffer());
                fsp.writeFile(`${downloadDir}/${sprite[0]}.png`, buffer);
            } catch (e) {
                // sprites can be null
            }
        }
};

const writeArtwork = async (pokemonObject, downloadDir) => {
    console.log("Downloading artwork...");

    const result = await fetchImage(pokemonObject["sprites"]["other"]["official-artwork"]["front_default"]);
    const buffer = Buffer.from(await result.arrayBuffer());
    fsp.writeFile(`${downloadDir}/original-artwork.png`, buffer);
};

export { writeStats, writeSprites, writeArtwork };