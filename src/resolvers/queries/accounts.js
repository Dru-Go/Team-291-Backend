// ANCHOR this will return all accounts
import { User } from '../../models';
import JWT from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// NOTE Get all accounts stored in the database
export const accounts = async () => {
  return await User.find().catch((error) => new Error(error));
};

// NOTE login to the system using email and a password
export const login = async ({ input }) => {
  const account = await User.findOne({ phone: input.phone });
  if (!account) {
    throw new Error('Account does not exist');
  }
  console.log(input.password === account.password);
  const isEqual = bcrypt.compare(input.password, account.password);

  if (!isEqual) {
    throw new Error('Password is incorrect');
  }
  const token = JWT.sign(
    { driverId: account.id, phone: account.phone },
    'teamtwonineonegroupasupersecretkey',
    {
      expiresIn: '1h'
    }
  );
  const Auth = { driverId: account.id, token, tokenExpiration: 1 };
  return Auth;
};
