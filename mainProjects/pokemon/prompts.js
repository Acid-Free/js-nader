import inquirer from "inquirer";

const promptName = async () => {
    const response = await inquirer.prompt([
        {
            name: "name",
            message: "Pokemon name:",
            type: "input"
        }
    ]);
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
};

const promptContinue = async () => {
    const response = await inquirer.prompt([
        {
            name: "continue",
            message: "Continue?",
            type: "confirm"
        }
    ]);
};

export { promptName, promptActions, promptContinue };