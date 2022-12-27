import fs from "fs/promises";
import path from "path";
import prompt from "./prompts.js";
import fetch from "./fetch.js";

const getPromptObject = async () => {
    const promptObject = await prompt();
    const pokemonObject = await fetch(promptObject.name);

    const stats = {};
    for (const stat of pokemonObject.stats) {
        const [statName, statValue] = [stat.stat.name, stat.base_stat];
        stats[statName] = statValue;
    }
    console.log(stats);
};

getPromptObject()



