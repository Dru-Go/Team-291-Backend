// ANCHOR this is the mutaion to create an mechanic
import { Mechanic } from '../../models';
import { parceArgs } from '../utils';

export const newMechanic = async (mech) => {
  const input = parceArgs(mech);
  const mechanic = new Mechanic({
    company_name: input.company_name,
    company_img: input.company_img,
    company_relative_location: input.company_relative_location,
    company_phoneNo: input.company_phoneNo,
    company_absolute_location: {
      latitude: input.latitude,
      longitude: input.longitude
    }
  });

  await mechanic
    .save()
    .then(console.log(`Inserted is ${mechanic}`))
    .catch((error) => {
      console.log(error);
    });

  return mechanic;
};
