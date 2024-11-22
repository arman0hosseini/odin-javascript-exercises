/**
 * 
 * @param {array} array 
 */
const findTheOldest = function (array) {
    let oldestPerson;
    let oldestAge = 0;

    for (let obj of array) {
        if (obj.yearOfDeath == undefined) {
            obj.yearOfDeath = new Date().getFullYear();
        }
        let age = obj.yearOfDeath - obj.yearOfBirth;
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = obj;
        }
    }
    return oldestPerson;
};


// Do not edit below this line
module.exports = findTheOldest;
