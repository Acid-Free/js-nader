
const fizzbuzz = ((startNum, endNum) => {
    if (startNum > endNum)
        return;

    let result = "";
    if (startNum % 3 === 0)
        result += "Fizz";
    if (startNum % 5 === 0)
        result += "Buzz";

    result += " " + startNum;

    console.log(result);
    fizzbuzz(startNum + 1, endNum);
});

fizzbuzz(3, 16);