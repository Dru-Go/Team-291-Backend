// ANCHOR we define the resolvers which are used as routes and controllers
import {
  allMechaincs,
  login,
  accounts
} from './queries';
import { Breakdown } from '../models';
import { newMechanic, signup, newBreakdown } from './mutations';

const root = {
  // SECTION Queries
  hello: () => 'Hello Worlds',
  mechanics: () => allMechaincs(),
  accounts: () => accounts(),
  breakdownsByAccountID: ({ id }) => Breakdown.find({ account: id }).catch((error) =>
    console.log(error)
  ),
  login: (input) => login(input),
  // !SECTION

  // SECTION Mutations
  signUp: (input) => signup(input),
  newBreakdown: (input) => newBreakdown(input),
  newMechanic: (input) => newMechanic(input)
  // !SECTION
};

export default root;
