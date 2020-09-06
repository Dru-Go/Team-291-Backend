// ANCHOR we define the resolvers which are used as routes and controllers
import Account from './models/Account';
import Mechanic from './models/Mechanic';

// NOTE Parses the input and returns an object
export const parceArgs = (input) => JSON.parse(JSON.stringify(input)); // TODO Test function

export const root = {
    // NOTE Queries
    hello: () => 'Hello Worlds',
    mechanics: () => Mechanic.find().catch((error) => console.log(error)),
    accounts: () => Account.find().catch((error) => console.log(error)),
    vehicles: () => [],
    drivers: () => [],
    // SECTION Mutations
    addVehicles: (args) => {
        return [];
    },
    login: () => {},
    signUp: ({ input }) => {
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
    },
    newBreakdown: () => {},
    // NOTE Creating a new mechanic
    newMechanic: ({ input }) => {
        const args = parceArgs(input);
        console.log(`Arguments ${args.account}`);
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
    // !SECTION
};
