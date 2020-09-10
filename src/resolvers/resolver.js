// ANCHOR we define the resolvers which are used as routes and controllers
import allAccounts from './queries/accounts';
import signUp from './mutations/signup';
import allMechanics from './queries/mechanics';
import newMechanic from './mutations/newMechanic';

const root = {
    // SECTION Queries
    hello: () => 'Hello Worlds',
    mechanics: () => allMechanics(),
    accounts: () => allAccounts(),
    vehicles: () => [],
    drivers: () => [],
    // !SECTION

    // SECTION Mutations
    addVehicles: () => [],
    login: () => {},
    signUp: ({ input }) => signUp(input),
    newBreakdown: () => {},
    newVehicles: () => [],
    // NOTE Creating a new mechanic
    newMechanic: ({ input }) => newMechanic(input)
    // !SECTION
};

export default root;
