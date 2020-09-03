// ANCHOR Here we create the schema for an account
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Create the User Schema.
const AccountSchema = new Schema({
  id: {
    type: mongoose.Types.ObjectId,
    required: true,
    unique: true
  },
  user_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  phone_num: {
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
    type: Number,
    required: true,
    min: 0,
    max: 4
  }
});

const User = mongoose.model('Account', AccountSchema);

export default User;
