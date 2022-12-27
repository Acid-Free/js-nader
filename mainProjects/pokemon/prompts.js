import inquirer from "inquirer";
import fsp from "fs/promises";
import fs from "fs";
import fetchPokemon from "./fetch.js";
import { writeStats, writeSprites, writeArtwork } from "./file-writer.js";

const promptName = async () => {
    const response = await inquirer.prompt([
        {
            name: "name",
            message: "Pokemon name:",
            type: "input"
        }
    ]);
    return response;
};

const promptActions = async () => {
    const response = await inquirer.prompt([
        {
            name: "actions",
            message: "Select actions to perform:",
            choices: ["Stats", "Sprites", "Artwork"],
            type: "checkbox"
        }
    ]);
    return response;
};

const promptContinue = async () => {
    const response = await inquirer.prompt([
        {
            name: "continue",
            message: "Continue?",
            type: "confirm"
        }
    ]);
    return response;
};

const promptUser = async () => {
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

export { promptUser };