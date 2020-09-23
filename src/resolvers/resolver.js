// ANCHOR we define the resolvers which are used as routes and controllers
import allAccounts from './queries/accounts';
import signUp from './mutations/signup';
import { mechanics } from './queries/mechanics';
import newMechanic from './mutations/newMechanic';

const root = {
    // SECTION Queries
    hello: () => 'Hello Worlds',
    mechanics: () => mechanics(),
    accounts: () => allAccounts(),
    vehicles: () => [],
    drivers: () => [],
    login: ({ input }) => [],
    // !SECTION

    // SECTION Mutations
    addVehicles: () => [],
    signUp: ({ input }) => signUp(input),
    newBreakdown: () => {},
    newVehicles: () => [],
    // NOTE Creating a new mechanic
    newMechanic: ({ input }) => newMechanic(input)
    // !SECTION
};

export default root;
