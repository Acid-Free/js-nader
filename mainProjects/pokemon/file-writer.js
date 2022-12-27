import fsp from "fs/promises";
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

    const spriteURLs = [];
    const validImages = ["back_default", "back_female", "back_shiny", "back_shiny_female", "front_default", "front_female", "front_shiny", "front_shiny_female"];

    for (const sprite of Object.entries(pokemonObject.sprites))
        if (validImages.includes(sprite[0])) {
            try {
                const result = await fetchImage(sprite[1]);
                const buffer = Buffer.from(await result.arrayBuffer());
                const fileDir = `${downloadDir}/${sprite[0]}.png`;
                fsp.writeFile(fileDir, buffer);
                console.log("✓", fileDir);
            } catch (e) {
                // sprites can be null
            }
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