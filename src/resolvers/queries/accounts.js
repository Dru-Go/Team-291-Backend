// ANCHOR this will return all accounts
import Account from '../../models/Account';
import JWT from 'jsonwebtoken';
import bycript from 'bcryptjs';

// NOTE Get all accounts stored in the database
export const accounts = async () => {
	return await Account.find().catch((error) => console.log(error));
};

// NOTE login to the system using email and a password
export const login = async ({ phone, password }) => {
	const account = await Account.findOne({ phone: phone });
	if (!account) {
		throw new Error('Driver does not exist');
	}
	const isEqual = await bycript.compare(password, account.password);

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
	return { driverId: account.id, token: token, tokenExpiration: 1 }; ;
};
