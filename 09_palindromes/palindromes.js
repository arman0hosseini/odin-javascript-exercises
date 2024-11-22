/**
 * 
 * @param {string} userString 
 * @returns 
 */
const palindromes = function (userString) {

    const validChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    // join() filter() 

    let fixedString = userString
        .toLowerCase()
        .split('')
        .filter((value) => { return validChars.includes(value); })
        .join('');
    let revString = fixedString.split('').reverse().join('');
    return revString === fixedString;
};

// Do not edit below this line
module.exports = palindromes;
