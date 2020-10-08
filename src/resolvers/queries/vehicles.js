// ANCHOR this will return all vehicles
import { Vehicle } from '../../models';

export async function vehicles () {
    return await Vehicle.find().catch((error) => console.log(error));
}
