// ANCHOR Here we create the schema for a mechanic
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// NOTE Create the Mechanic Schema.
const MechanicSchema = new Schema({
  account_id: {
    type: mongoose.Types.ObjectId,
    required: true,
    unique: true
  },
  location: {
    type: String,
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
  }
});

const Mechanic = mongoose.model('Mechanic', MechanicSchema);

export default Mechanic;
