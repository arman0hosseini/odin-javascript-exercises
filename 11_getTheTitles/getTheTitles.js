/**
 * 
 * @param {array} array 
 */
const getTheTitles = function (array) {
    let titleArr = [];

    for (let obj of array) {
        titleArr.push(obj.title);
    }
    return titleArr;
};


// Do not edit below this line
module.exports = getTheTitles;
