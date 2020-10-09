// ANCHOR this will return mechanics
import { Mechanic } from '../../models';
export async function mechanics () {
    return await Mechanic.find().catch((error) => console.log(error));
}
