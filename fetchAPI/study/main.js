import fetch from "node-fetch";

const response = fetch("https://www.wallhaven.cc");

const readResponse = async () => {

    const result = await response;
    // for (const key in result) {
    //     console.log(key);
    // }

    // console.log(result.__proto__);
    // console.log(result.__proto__.__proto__);

    console.log(await result.text());
};

readResponse();