const fetchFast = () => {
    return new Promise((resolve, reject) => setTimeout(() => {
        resolve("Fast Done!");
    }, 2000));
};

const fetchSlow = () => {
    return new Promise((resolve, reject) => setTimeout(() => {
        resolve("Slow Done");
    }, 6000));
};

console.log("Program starting...");

const firstTimestamp = new Date();

const processFetch = async () => {
    const dataFast = fetchFast();
    const dataSlow = fetchSlow();
    const allData = await Promise.all([dataFast, dataSlow]);
    console.log(dataFast);
    console.log(dataSlow);

    const secondTimestamp = new Date();
    const delta = secondTimestamp - firstTimestamp;
    console.log(delta);
};

processFetch();

