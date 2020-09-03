import root from '../resolver';
import accountSeed from '../seed/accounts';

describe('Testing Resolvers', () => {
  test('checks if the function hello returns hello', () => {
    expect(root.hello()).toBe('Hello Worlds');
  });
  
  test('check if accounts are being loaded', () => {
    expect(root.accounts()).toBe(accountSeed);
  });
})


