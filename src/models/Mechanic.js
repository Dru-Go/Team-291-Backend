// ANCHOR Here we create the schema for a mechanic
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// NOTE Create the Mechanic Schema.
const MechanicSchema = new Schema({
  account: {
    type: mongoose.Types.ObjectId,
    required: true,
    unique: true
  },
  company_name: {
    type: String,
    required: true
  },
  company_img: {
    type: String,
    required: true
  },
   company_relative_location: {
    type: String,
    required: true
  },
   company_absolute_location: {
    type: String,
    required: true
  }
});

const Mechanic = mongoose.model('Mechanic', MechanicSchema);

export default Mechanic;
