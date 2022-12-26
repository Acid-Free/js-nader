const requestJsonPlaceholder = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    console.log(await result.json());
};

requestJsonPlaceholder();