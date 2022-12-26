const fetchUser = () => {
    return new Promise((resolve, reject) => setTimeout(() => {
        resolve({ data: { user: "Monkey", admin: true } });
    }, 3000));
};

const login = (object) => {
    if (object.admin === true)
        console.log("Successfully logged in!");
    else
        console.log("Failed to log in, please try again.");
};

console.log("Program starting...");

const processLogin = async () => {
    try {
        const userData = (await fetchUser()).data;
        login(userData);
    } catch (e) {
        console.error(e);
    }
};

processLogin();

console.log("Program complete!");