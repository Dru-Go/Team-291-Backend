// ANCHOR this will return mechanics
import Mechanic from '../../models/Mechanic';
import geolib from 'geolib';
export async function mechanics () {
    return await Mechanic.find().catch((error) => console.log(error));
}

// TODO accept the initial location and get 5 - 10 nearest locations
/*
 STEP 1. Get all the mechainics
 STEP 2. Get the distance of each mechanic to the source
     Here we use getDistance to get the distance
 STEP 3. Get the 10 most closest mechainics

*/

const allMechaincs = mechanics();

function getDistance (source, mech) {
    return { mechanic: mech, distanceFromSource: geolib.getDistance(source, mech.location) };
}

function sortMechanics (hashmaps, limit) {
    // NOTE sort the mechaics based on the distance from the source and return the first $limit elements
    return hashmaps.sort((a, b) => a.distanceFromSource - b.distanceFromSource).slice(0, limit);
}

export function closestMechanics (source, limit) {
    const mechaDistances = [];
    allMechaincs.map((mech) => {
        mechaDistances.push(getDistance(source, mech));
    });

    return sortMechanics(mechaDistances, limit);
}
