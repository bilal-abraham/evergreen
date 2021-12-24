import f from '../data/fnames.js'
import l from '../data/lnames.js'
import g from '../data/gender.js'
import r from '../data/race.js'
import d from '../data/dayofdeath.js'
import m from '../data/maritalstatus'
import o from '../data/occupation.js'
import c from '../data/causeofdeath.js'

const findIndexMatch = (index, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            return arr[i];
        }
    }
}


export const getFirstName = (line) => {
    const fNames = f.split('\n');
    return findIndexMatch(line, fNames);
}

export const getLastName = (line) => {
    const lNames = l.split('\n');
    return findIndexMatch(line, lNames);
} 

export const getGender = (line) => {
    const gender = g.split('\n');
    return findIndexMatch(line, gender);
}

export const getRace = (line) => {
    const race = r.split('\n');
    return findIndexMatch(line, race)
}

export const getDayofDeath = (line) => {
    const dayOfDeath = d.split('\n');
    return findIndexMatch(line, dayOfDeath);
}

export const getMaritalStatus = (line) => {
    const maritalStatus = m.split('\n');
    return findIndexMatch(line, maritalStatus);
}

export const getOccupation = (line) => {
    const occupation = o.split('\n');
    return findIndexMatch(line, occupation);
}

export const getCauseofDeath = (line) => {
    const causeOfDeath = c.split('\n');
    return findIndexMatch(line, causeOfDeath)
}