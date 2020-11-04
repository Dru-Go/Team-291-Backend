// ANCHOR this is the mutaion to create an account
import { User } from '../../models';
import { parceArgs } from '../utils';
import bcrypt from 'bcrypt';

export const signup = async (user) => {
    const input = parceArgs(user);
    const hashedPassword = (await bcrypt.hash(input.password, 10)).toString();
    const account = new User({
        first_name: input.first_name,
        last_name: input.last_name,
        phone: input.phone,
        profile_img: input.profile_img,
        password: hashedPassword,
        account_type: input.account_type
    });
    await account
        .save()
        .then(console.log(`Inserted is ${account}`))
        .catch((error) => {
            console.log(error);
            throw new Error(`Error: ${error}`);
        });
    return input;
};
