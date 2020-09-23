// ANCHOR this is the mutaion to create an breakdown
import Breakdown from '../../models/Breakdown';
import { parceArgs } from '../utils';
import { closestMechanics } from '../queries/mechanics';
export default async function newBreakdown (input) {
     const args = parceArgs(input);
     const breakdown = new Breakdown({
            time_of_crisis: args.time_of_crisis,
            driver_comment: args.driver_comment,
            optional_vehicle_info: args.optional_vehicle_info,
            type_of_breakdown: args.type_of_breakdown,
            location_url: args.location_url
        });

    await breakdown
        .save()
        .then(console.log(`Inserted is ${breakdown}`))
        .catch((error) => {
            console.log(error);
        });

        return closestMechanics(args.location_url);
    }
