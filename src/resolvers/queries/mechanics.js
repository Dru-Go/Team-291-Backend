// ANCHOR this will return all mechanics
import Mechanic from '../../models/Mechanic';

export async function mechanics () {
    return await Mechanic.find().catch((error) => console.log(error));
}

// TODO accept the initial location and get 5 - 10 nearest locations
/*
 geolib.orderByDistance({ latitude: 51.515, longitude: 7.453619 }, [
     { latitude: 52.516272, longitude: 13.377722 },
     { latitude: 51.518, longitude: 7.45425 },
     { latitude: 51.503333, longitude: -0.119722 },
 ]);
*/

export async function closestMechanics (location) {
    return await Mechanic.find().catch((error) => console.log(error));
}
