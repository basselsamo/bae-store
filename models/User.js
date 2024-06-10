// /models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true,  match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
  password: { type: String, required: true },
  firstName: {type: String},
  lastName: {type: String},
  address: {type: String},
  phoneNumber: {type: String}
});

module.exports = mongoose.model('User', UserSchema);
