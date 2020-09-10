// ANCHOR this is the mutaion to create an account
import Account from '../../models/Account';
import { parceArgs } from '../utils';

export default function signup (input) {
       const args = parceArgs(input);
     const account = new Account({
            first_name: args.first_name,
            last_name: args.last_name,
            phone_no: args.phone_num,
            profile_img: args.profile_img,
            password: args.password,
            account_type: args.account_type
        });

return account
        .save()
        .then(console.log(`Inserted is ${account}`))
        .catch((error) => {
            console.log(error);
        });
    }
