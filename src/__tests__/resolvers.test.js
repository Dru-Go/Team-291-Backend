// ANCHOR Here we will test resolvers
import { root , parceArgs} from '../resolver';

describe('Testing Resolvers', () => {
// NOTE test.only to test a specific test senario
// NOTE test.skip to skip that specific test 

  test('checks if the function hello returns hello', () => {
    expect(root.hello()).toBe('Hello Worlds');
  });
  
  test('should check if the parceArgs actually parses graphql inputs to standard objects', () => {
    expect(typeof parceArgs({input: {testing: "case"}})).toEqual("object")
  });
})

// Testing mongo database
describe('Testing Mongo', () => {
});
