// ANCHOR this will return all drivers
import Drivers from '../../models/Drivers';

export default function drivers () {
    return Drivers.find().catch((error) => console.log(error));
}
