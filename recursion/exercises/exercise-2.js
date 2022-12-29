const flatten = (arr => {
    const result = [];
    for (element of arr) {
        if (Array.isArray(element))
            result.push(...flatten(element));
        else
            result.push(element);
    }
    return result;
});

const input1 = [1, 2, 3, [[[[[[[4]]]], [[5]]]]], [6, [7, 8, 9], 6]];
console.log(flatten(input1));