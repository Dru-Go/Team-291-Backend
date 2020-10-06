// ANCHOR this will return all mechanics
import Mechanic from '../../models/Mechanic';
import geolib from 'geolib';
export async function mechanics () {
    return await Mechanic.find().catch((error) => console.log(error));
}

// TODO accept the initial location and get 5 - 10 nearest locations
/*
 Step 1. Get all the mechainics
 Step 2. Get the distance of each mechanic to the source
     Here we use getDistance to get the distance
 Step 3. Get the 10 most closest mechainics

*/

const allMechaincs = mechanics();

function getDistance (source, mech) {
    return { mechanic: mech, distanceFromSource: geolib.getDistance(source, mech.location) };
}

function sortMechanics (hashmaps, limit) {
    hashmaps.sort((hash) => hash.distanceFromSource);
}

export { allMechaincs, getDistance, sortMechanics };

export async function closestMechanics (location) {
    return await Mechanic.find().catch((error) => console.log(error));
}
