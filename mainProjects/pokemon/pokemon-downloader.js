/*
TODO 
separate file download options
connect prompt results to separated download functions
don't allow file download if pokemon doesn't exist
clean user input (pokemon name) (e.g. tolowercase, trim, etc)
- create looping functionality using promptObject continue
if invalid pokemon name, show that it doesn't exist
*/

import fsp from "fs/promises";
import fs from "fs";
import prompt from "./prompts.js";
import fetchPokemon from "./fetch.js";
import { writeStats, writeSprites, writeArtwork } from "./file-writer.js";

const getPromptObject = async () => {
    while (true) {
        const promptObject = await prompt();
        const pokemonObject = await fetchPokemon(promptObject.name.toLowerCase().trim());
        const downloadDir = `./pokemon-storage/${pokemonObject.name}`;

        if (Object.keys(pokemonObject).length == 0)
            console.log("Invalid Pokemon name");
        else {
            // creates a new directory if it doesn't exist yet
            if (!fs.existsSync(`${downloadDir}/`))
                fsp.mkdir(downloadDir);

            if (promptObject.actions.includes("Stats"))
                writeStats(pokemonObject, downloadDir);
            if (promptObject.actions.includes("Sprites"))
                writeSprites(pokemonObject, downloadDir);
            if (promptObject.actions.includes("Artwork"))
                writeArtwork(pokemonObject, downloadDir);
        }

        if (!promptObject.continue) {
            console.log("Terminating...");
            break;
        }
    }
};

getPromptObject()



