const fibonacci = function (num) {
    if (num < 0) return "OOPS";
    if (num == 0) return 0;
    let fibArr = [1, 1];
    let nextitem;
    for (let i = 2; i < num; i++) {
        nextitem = fibArr[i - 2] + fibArr[i - 1];
        fibArr.push(nextitem);
    }
    return fibArr[fibArr.length - 1];
};


// Do not edit below this line
module.exports = fibonacci;
