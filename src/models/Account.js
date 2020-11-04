// ANCHOR Here we create the schema for an account
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Create the User Schema.
const AccountSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
   profile_img: {
    type: String
  },
   password: {
    type: String,
    required: true
  },
   account_type: {
    type: String,
    required: true,
    enum: ['MECHANIC', 'DRIVER', 'ADMIN']
  }
});

export const User = mongoose.model('Account', AccountSchema);
