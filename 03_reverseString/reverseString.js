const reverseString = function (userString) {
    let reversedString = '';
    for (let i = userString.length - 1; i >= 0; i--) {
        reversedString += userString[i];
    }
    return reversedString;
};
// Do not edit below this line
module.exports = reverseString;
