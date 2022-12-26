const requestCraigslistAbout = async () => {
    const result = await fetch("https://www.craigslist.org/about/");

    console.log(await result.text());
};

requestCraigslistAbout();