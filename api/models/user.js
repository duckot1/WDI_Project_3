const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: { type: String, trim: true, required: true },
  last_name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true },
  profile_picture: { type: String, trim: true },
  age: { type: Number, required: true },
  latlng: { type: String, trim: true },
  bio: { type: String, trim: true },
  events_attended: { type: String, trim: true },
  events_requested: { type: String, trim: true },
  events_flaked: { type: String, trim: true },
  events_hosted: { type: String, trim: true }
},{
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
