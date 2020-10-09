// ANCHOR this will return all breakdowns
import { Breakdown } from '../../models';

export async function breakdowns () {
  return await Breakdown.find().catch((error) => console.log(error));
}

export async function breakdownsByAccountID (id) {
  return await Breakdown.find({ account: id }).catch((error) =>
    console.log(error)
  );
}
