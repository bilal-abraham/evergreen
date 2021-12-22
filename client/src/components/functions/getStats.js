import f from '../data/fnames'
import l from '../data/lnames'
import g from '../data/gender'
import r from '../data/race'
import d from '../data/dayofdeath'
import m from '../data/maritalstatus'
import o from '../data/occupation'
import c from '../data/causeofdeath'

const findIndexMatch = (index, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (i == index) {
            return arr[i];
        }
    }
}

export function getFirstName(line) {
    const fNames = f.split('\n');
    return findIndexMatch(line, fNames);
}

export function getLastName(line) {
    const lNames = l.split('\n');
    return findIndexMatch(line, lNames);
} 

export function getGender(line) {
    const gender = g.split('\n');
    return findIndexMatch(line, gender);
}

export function getRace(line) {
    const race = r.split('\n');
    return findIndexMatch(line, race)
}

export function getDayofDeath(line) {
    const dayOfDeath = d.split('\n');
    return findIndexMatch(line, dayOfDeath);
}

export function getMaritalStatus(line) {
    const maritalStatus = m.split('\n');
    return findIndexMatch(line, maritalStatus);
}

export function getOccupation(line) {
    const occupation = o.split('\n');
    return findIndexMatch(line, occupation);
}

export function getCauseofDeath(line) {
    const causeOfDeath = c.split('\n');
    return findIndexMatch(line, causeOfDeath)
}