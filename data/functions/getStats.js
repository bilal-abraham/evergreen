const fs = require('fs');
const getFile = (fileName) =>  fs.readFileSync(`../doc/${fileName}.txt`, { encoding: 'utf-8' }).split('\n');
const findIndexMatch = (index, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (i == index) {
            return arr[i];
        }
    }
}


exports.getFirstName = (line) => {
    const fNames = getFile('fnames');
    return findIndexMatch(line, fNames);
};

exports.getLastName = (line) => {
    const lNames = getFile('lnames');
    return findIndexMatch(line, lNames);
}; 

exports.getGender = (line) => {
    const gender = getFile('gender');
    return findIndexMatch(line, gender);
};

exports.getRace = (line) => {
    const race = getFile('race')
    return findIndexMatch(line, race)
};

exports.getDayofDeath = (line) => {
    const dayOfDeath = getFile('dayofdeath');
    return findIndexMatch(line, dayOfDeath);
};

exports.getMaritalStatus = (line) => {
    const maritalStatus = getFile('maritalstatus');
    return findIndexMatch(line, maritalStatus);
};

exports.getOccupation = (line) => {
    const occupation = getFile('occupation');
    return findIndexMatch(line, occupation);
};

exports.getCauseofDeath = (line) => {
    const causeOfDeath = getFile('causeofdeath');
    return findIndexMatch(line, causeOfDeath)
};