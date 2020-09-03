// ANCHOR Here we create the schema for a breakdown
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// NOTE Create the Breakdown Schema.
const BreakdownSchema = new Schema({
  id: {
    type: mongoose.Types.ObjectId,
    required: true,
    unique: true
  },
  time_of_crisis: {
    type: Date,
    required: true
  },
  company_name: {
    type: String,
    required: true
  },
  comapny_img: {
    type: String,
    required: true
  },
   company_relative_loc: {
    type: String
  },
   company_relative_absolute: {
    type: String,
    required: true
  },
   location_url: {
    type: String,
    required: true
  }
});

const Breakdown = mongoose.model('Breakdown', BreakdownSchema);

export default Breakdown;
