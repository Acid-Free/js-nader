import fs from "fs/promises";
import path from "path";
import prompt from "./prompts.js";
import fetch from "./fetch.js";



const getPromptObject = async () => {
    const promptObject = await prompt();
    const pokemonObject = await fetch(promptObject.name);
    console.log(pokemonObject);
};

getPromptObject()



