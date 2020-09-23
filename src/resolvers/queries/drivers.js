// ANCHOR this will return all drivers
import Drivers from '../../models/Drivers';

export default async function drivers () {
    return await Drivers.find().catch((error) => console.log(error));
}
