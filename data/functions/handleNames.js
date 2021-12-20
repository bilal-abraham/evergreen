const fs = require('fs');
const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });
const lNames = fs.readFileSync('../doc/lnames.txt', { encoding: 'utf-8' }).split('\n');
const fNames = fs.readFileSync('../doc/fnames.txt', { encoding: 'utf-8' }).split('\n');
const stats = require('./getStats.js');


let matchingVals = [];
let matchingPeople = [];

const addMatchingFields = (x) => {
    matchingPeople.push({
        firstName: stats.getFirstName(x),
        lastName: stats.getLastName(x),
        gender: stats.getGender(x),
        race: stats.getRace(x),
        dayOfDeath: stats.getDayofDeath(x),
        maritalStatus: stats.getMaritalStatus(x),
        occupation: stats.getOccupation(x),
        causeofDeath: stats.getCauseofDeath(x)
    })
}

console.log('Who are you looking for?')
rl.question('Last Name: ', (lName) =>  {
    rl.question('First Name: ', (fName) =>  {
        for (let i = 0; i < lNames.length; i++) {
            if (lNames[i] == lName && fNames[i] == fName) {
                matchingVals.push(i);
            }
        }
        for (const val of matchingVals) {
            addMatchingFields(val);
        }
        for (const person of matchingPeople) {
            console.log(person);
        }
        rl.close();
    });
});




rl.on('close', () => {
    process.exit(0);
});