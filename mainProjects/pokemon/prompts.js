import inquirer from "inquirer";

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

export { promptName, promptActions, promptContinue };