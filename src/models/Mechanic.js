// ANCHOR Here we create the schema for a mechanic
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// NOTE Create the Mechanic Schema.
const MechanicSchema = new Schema(
  {
    company_name: {
      type: String,
      required: true
    },
    company_img: {
      type: String,
      required: true
    },
    company_phoneNo: {
      type: String,
      required: true
    },
    company_relative_location: {
      type: String,
      required: true
    },
    company_absolute_location: {
      latitude: Number,
      longitude: Number
    }
  },
  { strict: false }
);

/*
Because of `strict: false`, you can store any additional properties
Eg
const doc = new Mechanic({
  company_absolute_location: {
    latitude: 123.45,
    longitude: 34.4
  }
});

*/

export const Mechanic = mongoose.model('Mechanic', MechanicSchema);
