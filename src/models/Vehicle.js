// ANCHOR Here we create the schema for an vehicle
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// NOTE Create the Vehicle schema
const VehicleSchema = new Schema({
  license_plate_number: {
    type: String,
    required: true,
    unique: true
  },
  brand: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
});

export const Vehicle = mongoose.model('Vehicle', VehicleSchema);
