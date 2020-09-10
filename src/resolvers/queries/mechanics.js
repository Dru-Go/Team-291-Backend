// ANCHOR this will return all mechanics
import Mechanic from '../../models/Mechanic';

export default function mechanics () {
    return Mechanic.find().catch((error) => console.log(error));
}
