const nums = [1, 2, 3, 4, 5];
const sum = ((arr, i) => {
    if (i === arr.length - 1)
        return arr[i];

    return arr[i] + sum(arr, i + 1);
});

console.log(sum(nums, 0));