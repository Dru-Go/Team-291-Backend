// ANCHOR this will return all drivers
import { Drivers } from '../../models';

export async function drivers () {
    return await Drivers.find().catch((error) => console.log(error));
}
