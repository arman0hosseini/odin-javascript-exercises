/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns 
 */
const sumAll = function (num1, num2) {
    let sum = 0;
    let firstNum, lastNum;

    if (
        !(num1 >= 0)
        || !(num2 >= 0)
        || !(typeof (num1) === "number")
        || !(typeof (num2) === "number")
        || !(Number.isInteger(num1))
        || !(Number.isInteger(num2))
    ) return "ERROR";

    if (num1 < num2) {
        firstNum = num1;
        lastNum = num2;
    }
    else {
        firstNum = num2;
        lastNum = num1;
    }


    for (let i = firstNum; i <= lastNum; i++) {
        sum += i;
    }
    return sum;
};

console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
