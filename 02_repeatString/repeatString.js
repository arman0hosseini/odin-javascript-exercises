
const repeatString = function (string, num) {
    let outputString = "";
    if (num < 0) return "ERROR";
    for (let i = 1; i <= num; i++) {
        outputString += string;
    }
    return outputString;
};


// Do not edit below this line
module.exports = repeatString;
