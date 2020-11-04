// ANCHOR Here we store utility functions that are share by all
// NOTE Parses the input and returns an object
import getDistance from 'geolib/es/getDistance';
import { Mechanic } from '../models';

export const parceArgs = (input) => JSON.parse(JSON.stringify(input)); // TODO Test function

// TODO accept the initial location and get 5 - 10 nearest locations
/*
 STEP 1. Get all the mechainics
 STEP 2. Get the distance of each mechanic to the source
     Here we use getDistance to get the distance
 STEP 3. Get the 10 most closest mechainics

*/

function getDistances (source, mech) {
  const distance = getDistance(source, mech.company_absolute_location);
  console.log(distance);
  return {
    mechanic: mech,
    distanceFromSource: distance
  };
}

function sortMechanics (hashmaps, limit) {
  // NOTE sort the mechaics based on the distance from the source and return the first $limit elements
    hashmaps.sort((a, b) => a.distanceFromSource - b.distanceFromSource);
    console.log('sorted mechanics', hashmaps, limit);
  return hashmaps;
}

export async function closestMechanics (source, limit) {
  const allMechaincs = await Mechanic.find().catch((error) =>
    console.log(error)
  );
  console.log(allMechaincs);
  const mechaDistances = [];
  allMechaincs.forEach((mech) => {
    mechaDistances.push(getDistances(source, mech));
  });
  return sortMechanics(mechaDistances, limit);
}
