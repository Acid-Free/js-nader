import inquirer from "inquirer";

const promptAll = async () => {
    const response = await inquirer.prompt([
        {
            name: "name",
            message: "Pokemon name:",
            type: "input"
        },
        {
            name: "actions",
            message: "Select actions to perform:",
            choices: ["Stats", "Sprites", "Artwork"],
            type: "checkbox"
        },
        {
            name: "continue",
            message: "Continue?",
            type: "confirm"
        }
    ]);

    return response;
};

// const prompt = await promptAll();
export default promptAll;