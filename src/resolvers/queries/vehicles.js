// ANCHOR this will return all vehicles
import Vehicle from '../../models/Vehicle';

export default function vehicles () {
    return Vehicle.find().catch((error) => console.log(error));
}
