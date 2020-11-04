// ANCHOR this is the mutaion to create an breakdown
import { Breakdown } from '../../models';
import { parceArgs, closestMechanics } from '../utils';
export const newBreakdown = async (breaks) => {
  const input = parceArgs(breaks);

  const breakdown = new Breakdown({
    account: input.account,
    time_of_crisis: input.time_of_crisis,
    driver_comment: input.driver_comment,
    optional_vehicle_info: input.optional_vehicle_info,
    type_of_breakdown: input.type_of_breakdown,
    vehicle: {
      license_plate_number: input.license_plate_number,
      brand: input.brand,
      v_type: input.type,
      color: input.color
    },
    location: {
      latitude: input.latitude,
      longitude: input.longitude
    }
  });

  await breakdown
    .save()
    .then(console.log(`Inserted is ${breakdown}`))
    .catch((error) => {
      console.log(error);
    });

  return closestMechanics(
    { latitude: input.latitude, longitude: input.longitude },
    10
  );
};
