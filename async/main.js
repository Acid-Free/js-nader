const fetchSomeData = () => {
    throw "yeah boi,  me bad!";
    const data = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Sian", age: 22 });
        }, 1000);
    });
    return data;
};

const useData = async () => {
    try {
        console.log('inside async');
        const data = await fetchSomeData();
        console.log('result:', data);
    } catch (e) {
        console.log("error:", e);
    }
};
console.log("program started");

useData();
console.log('program done');