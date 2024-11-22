/**
 * @param {Array} arr
 */
const removeFromArray = function (arr, ...arg) {
    let newArray = [];
    outer: for (const i of arr) {
        for (const j of arg) {
            if (i === j) {
                continue outer;
            }
        }
        newArray.push(i);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
