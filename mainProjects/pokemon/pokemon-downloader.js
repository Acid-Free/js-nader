import fsp from "fs/promises";
import fs from "fs";
import { promptName, promptActions, promptContinue } from "./prompts.js";
import fetchPokemon from "./fetch.js";
import { writeStats, writeSprites, writeArtwork } from "./file-writer.js";

const getPromptObject = async () => {
    while (true) {
        const nameResult = await promptName();
        const pokemonObject = await fetchPokemon(nameResult.name.toLowerCase().trim());
        const downloadDir = `./pokemon-storage/${pokemonObject.name}`;

        if (Object.keys(pokemonObject).length == 0)
            console.log("Invalid Pokemon name");
        else {
            console.log("Pokemon found");

            const actionResult = await promptActions();

            // creates a new directory if it doesn't exist yet
            if (actionResult.actions.length > 0 && !fs.existsSync(`${downloadDir}/`))
                fsp.mkdir(downloadDir);

            const actions = [];

            if (actionResult.actions.includes("Stats"))
                actions.push(writeStats(pokemonObject, downloadDir));
            if (actionResult.actions.includes("Sprites"))
                actions.push(writeSprites(pokemonObject, downloadDir));
            if (actionResult.actions.includes("Artwork"))
                actions.push(writeArtwork(pokemonObject, downloadDir));

            await Promise.all(actions);
        }

        const continueResult = await promptContinue();
        if (!continueResult.continue) {
            console.log("Terminating...");
            break;
        }
    }
};

getPromptObject()



