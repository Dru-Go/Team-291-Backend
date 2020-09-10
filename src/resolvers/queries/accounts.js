// ANCHOR this will return all accounts
import Account from '../../models/Account';

export default function accounts () {
    return Account.find().catch((error) => console.log(error));
}
