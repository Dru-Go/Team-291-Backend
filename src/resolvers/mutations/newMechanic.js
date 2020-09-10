// ANCHOR this is the mutaion to create an account
import Mechanic from '../../models/Mechanic';
import { parceArgs } from '../utils';

export default function newMechanic (input) {
       const args = parceArgs(input);
     const mechanic = new Mechanic({
            account: args.account,
            company_name: args.company_name,
            company_img: args.company_img,
            company_relative_location: args.company_relative_location,
            company_absolute_location: args.company_absolute_location
        });

return mechanic
        .save()
        .then(console.log(`Inserted is ${mechanic}`))
        .catch((error) => {
            console.log(error);
        });
    }
