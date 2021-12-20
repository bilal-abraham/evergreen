const fs = require('fs');
const findIndexMatch = (index, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (i == index) {
            return arr[i];
        }
    }
}


exports.getFirstName = (line) => {
    const fNames = fs.readFileSync('../doc/fnames.txt', { encoding: 'utf-8' }).split('\n');
    return findIndexMatch(line, fNames);
};

exports.getLastName = (line) => {
    const lNames = fs.readFileSync('../doc/lnames.txt', { encoding: 'utf-8' }).split('\n');
    return findIndexMatch(line, lNames);
}; 

exports.getGender = (line) => {
    const gender = fs.readFileSync('../doc/gender.txt', { encoding: 'utf-8' }).split('\n');
    return findIndexMatch(line, gender);
};

exports.getRace = (line) => {
    const race = fs.readFileSync('../doc/race.txt', { encoding: 'utf-8' }).split('\n');
    return findIndexMatch(line, race);
};

exports.getDayofDeath = (line) => {
    const dayOfDeath = fs.readFileSync('../doc/dayofdeath.txt', { encoding: 'utf-8' }).split('\n');
    return findIndexMatch(line, dayOfDeath);
};

exports.getMaritalStatus = (line) => {
    const maritalStatus = fs.readFileSync('../doc/maritalstatus.txt', { encoding: 'utf-8' }).split('\n');
    return findIndexMatch(line, maritalStatus);
};

exports.getOccupation = (line) => {
    const occupation = fs.readFileSync('../doc/occupation.txt', { encoding: 'utf-8' }).split('\n');
    return findIndexMatch(line, occupation);
};

exports.getCauseofDeath = (line) => {
    const causeOfDeath = fs.readFileSync('../doc/causeofdeath.txt', { encoding: 'utf-8' }).split('\n');
    return findIndexMatch(line, causeOfDeath);
};


// const fs = require('fs');
// const findIndexMatch = (index, arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (i == index) {
//             return arr[i];
//         }
//     }
// }
// const getFile = (fileName) => {
//     fs.readFileSync(`../doc/${fileName}.txt`, { encoding: 'utf-8' }).split('\n');
// }


// exports.getFirstName = (line) => {
//     const fNames = getFile('fnames');
//     return findIndexMatch(line, fNames);
// };

// exports.getLastName = (line) => {
//     const lNames = getFile('lnames');
//     return findIndexMatch(line, lNames);
// }; 

// exports.getGender = (line) => {
//     const gender = getFile('gender');
//     return findIndexMatch(line, gender);
// };

// exports.getRace = (line) => {
//     const race = getFile('race')
//     return findIndexMatch(line, race)
// };

// exports.getDayofDeath = (line) => {
//     const dayOfDeath = getFile('dayofdeath');
//     return findIndexMatch(line, dayOfDeath);
// };

// exports.getMaritalStatus = (line) => {
//     const maritalStatus = getFile('maritalstatus');
//     return findIndexMatch(line, maritalStatus);
// };

// exports.getOccupation = (line) => {
//     const occupation = getFile('occupation');
//     return findIndexMatch(line, occupation);
// };

// exports.getCauseofDeath = (line) => {
//     const causeOfDeath = getFile('causeofdeath');
//     return findIndexMatch(line, causeOfDeath)
// };