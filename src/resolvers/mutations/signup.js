// ANCHOR this is the mutaion to create an account
import Account from '../../models/Account';
import { parceArgs } from '../utils';
import bycript from 'bcryptjs';

export default async function signup (input) {
    const args = parceArgs(input);
    const hashedPassword = await bycript.hash(args.driverInput.password, 12);
    const account = new Account({
        first_name: args.first_name,
        last_name: args.last_name,
        phone_no: args.phone_no,
        profile_img: args.profile_img,
        password: hashedPassword,
        account_type: args.account_type
    });

    await account
        .save()
        .then(console.log(`Inserted is ${account}`))
        .catch((error) => {
            console.log(error);
            throw new Error(`Error: ${error}`);
        });
    return input;
}
