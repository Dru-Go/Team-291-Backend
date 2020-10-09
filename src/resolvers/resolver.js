// ANCHOR we define the resolvers which are used as routes and controllers
import {
  allMechaincs,
  login,
  accounts, breakdownsByAccountID, breakdowns
} from './queries';
import { newMechanic, signup, newBreakdown } from './mutations';

const root = {
  // SECTION Queries
  hello: () => 'Hello Worlds',
  mechanics: () => allMechaincs(),
  accounts: () => accounts(),
  breakdowns: () => breakdowns(),
  breakdownsByAccountID: ({ id }) => breakdownsByAccountID(id),
  login: (input) => login(input),
  // !SECTION

  // SECTION Mutations
  signUp: (input) => signup(input),
  newBreakdown: (input) => newBreakdown(input),
  newMechanic: (input) => newMechanic(input)
  // !SECTION
};

export default root;
