import fsp from "fs/promises";
import { url } from "inspector";
import { fetchImage } from "./fetch.js";

const writeStats = async (pokemonObject, downloadDir) => {
    console.log("Downloading stats...");

    let stats = "";
    for (const stat of pokemonObject.stats) {
        const [statName, statValue] = [stat.stat.name, stat.base_stat];
        stats += `${statName}: ${statValue}\n`;
    }

    const fileDir = `${downloadDir}/stats.txt`;
    fsp.writeFile(fileDir, stats);
    console.log("✓", fileDir);
};

const writeSprites = async (pokemonObject, downloadDir) => {
    console.log("Downloading sprites...");

    const spriteNames = [];
    const spriteURLs = [];
    const spriteBuffers = {};
    const validImages = ["back_default", "back_female", "back_shiny", "back_shiny_female", "front_default", "front_female", "front_shiny", "front_shiny_female"];

    for (const sprite of Object.entries(pokemonObject.sprites))
        if (validImages.includes(sprite[0]) && sprite[1] !== null) {
            try {
                const currentFetch = fetchImage(sprite[1]);
                spriteNames.push(sprite[0]);
                spriteURLs.push(currentFetch);
            } catch (e) {
                // sprites can be null
            }
        }

    const urlResult = await Promise.all(spriteURLs);

    for (let i = 0; i < urlResult.length; ++i) {
        const buffer = Buffer.from(await urlResult[i].arrayBuffer());
        spriteBuffers[spriteNames[i]] = buffer;
    }

    for (const [name, buffer] of Object.entries(spriteBuffers)) {
        const fileDir = `${downloadDir}/${name}.png`;
        fsp.writeFile(fileDir, buffer);
        console.log("✓", fileDir);
    }
};

const writeArtwork = async (pokemonObject, downloadDir) => {
    console.log("Downloading artwork...");

    const result = await fetchImage(pokemonObject["sprites"]["other"]["official-artwork"]["front_default"]);
    const buffer = Buffer.from(await result.arrayBuffer());
    const fileDir = `${downloadDir}/original-artwork.png`;
    fsp.writeFile(fileDir, buffer);
    console.log("✓", fileDir);
};

export { writeStats, writeSprites, writeArtwork };