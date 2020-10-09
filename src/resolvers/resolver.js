// ANCHOR we define the resolvers which are used as routes and controllers
import { allMechaincs, login, breakdownsByAccountID } from './queries';
import { newMechanic, signup, newBreakdown } from './mutations';

const root = {
  // SECTION Queries
  hello: () => 'Hello Worlds',
  mechanics: () => allMechaincs(),
  breakdownsByAccountID: () => breakdownsByAccountID(),
  login: (input) => login(input),
  // !SECTION

  // SECTION Mutations
  addVehicles: () => [],
  signUp: (input) => signup(input),
  newBreakdown: (input) => newBreakdown(input),
  newVehicles: () => [],
  // NOTE Creating a new mechanic
  newMechanic: (input) => newMechanic(input)
  // !SECTION
};

export default root;
