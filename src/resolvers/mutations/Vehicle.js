// ANCHOR this is the mutaion to create an vehicle
import { Vehicle } from '../../models';
import { parceArgs } from '../utils';

export const newVehicle = (input) => {
    const args = parceArgs(input);
    const vehicle = new Vehicle({
        license_plate_number: args.license_plate_number,
        brand: args.brand,
        type: args.type,
        color: args.color
    });

    return vehicle
        .save()
        .then(console.log(`Inserted is ${vehicle}`))
        .catch((error) => {
            console.log(error);
        });
};
