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
  optional_vehicle_info: {
    type: String,
    required: true
  },
   type_of_breakdown: {
    type: String
  },
   location_url: {
    type: String,
    required: true
  }
});

const Breakdown = mongoose.model('Breakdown', BreakdownSchema);

export default Breakdown;
