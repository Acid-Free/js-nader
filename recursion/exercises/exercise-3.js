const input1 = {
    id: 1,
    name: "bob",
    happy: "true",
    friend: {
        id2: 2,
        name2: "alice",
        happy2: "true",
        friend: {
            id3: 3,
            name3: "boblees",
            happy3: "false"
        }
    }
};

const flatten = (object => {
    const result = {};

    for (const [key, value] of Object.entries(object)) {
        if (typeof value === "object") {
            for (const [flattenKey, flattenValue] of Object.entries(flatten(value)))
                result[flattenKey] = flattenValue;
        }
        else {
            result[key] = value;
        }
    }

    return result;
});

console.log(flatten(input1));