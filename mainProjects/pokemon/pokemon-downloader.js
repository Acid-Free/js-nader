/*
TODO 
separate file download options
connect prompt results to separated download functions
don't allow file download if pokemon doesn't exist
clean user input (pokemon name) (e.g. tolowercase, trim, etc)
*/

import fsp from "fs/promises";
import fs from "fs";
import path from "path";
import prompt from "./prompts.js";
import fetchPokemon from "./fetch.js";
import { writeStats, writeSprites, writeArtwork } from "./file-writer.js";

const getPromptObject = async () => {
    const promptObject = await prompt();
    const pokemonObject = await fetchPokemon(promptObject.name);

    const downloadDir = `./pokemon-storage/${pokemonObject.name}`;
    if (!fs.existsSync(`${downloadDir}/`))
        fsp.mkdir(downloadDir);

    writeStats(pokemonObject, downloadDir);

    writeSprites(pokemonObject, downloadDir);

    // artwork
    writeArtwork(pokemonObject, downloadDir);
};

getPromptObject()



