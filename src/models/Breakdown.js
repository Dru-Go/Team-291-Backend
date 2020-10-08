// ANCHOR Here we create the schema for a breakdown
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// NOTE Create the Breakdown Schema.
const BreakdownSchema = new Schema({
  time_of_crisis: {
    type: Date,
    required: true
  },
  driver_comment: {
    type: String,
    required: true
  },
  type_of_breakdown: {
    type: String
  },
  vehicle: {
    licence_plate_number: String,
    brand: String,
    type: String,
    color: String
  },
  location: {
    latitude: Number,
    longitude: Number
  }
}, { strict: false });

export const Breakdown = mongoose.model('Breakdown', BreakdownSchema);
