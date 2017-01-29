const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true }
});

// const userSchema = new mongoose.Schema({
//   first_name: { type: String, trim: true, required: true },
//   last_name: { type: String, trim: true, required: true },
//   email: { type: String, trim: true, required: true },
//   password: { type: String, trim: true },
//   profile_picture: { type: String, trim: true },
//   age: { type: Number, required: true },
//   latlng: { type: String, trim: true },
//   bio: { type: String, trim: true },
//   events_attended: { type: String, trim: true },
//   events_requested: { type: String, trim: true },
//   events_flaked: { type: String, trim: true },
//   events_hosted: { type: String, trim: true }
// },{
//   timestamps: true
// });

userSchema
  .virtual('password')
  .set(setPassword);

userSchema
  .virtual('passwordConfirmation')
  .set(setPasswordConfirmation);

userSchema
  .path('passwordHash')
  .validate(validatePasswordHash);

const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');
const validator = require('validator');


const userSchema = new mongoose.Schema({
  first_name: { type: String, trim: true, required: true },
  last_name: { type: String, trim: true, required: true },
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String},
  profile_picture: { type: String, trim: true },
  DoB: { type: String, trim: true },
  latlng: { type: String, trim: true },
  bio: { type: String, trim: true },
  events_attended: { type: String, trim: true },
  events_requested: { type: String, trim: true },
  events_flaked: { type: String, trim: true },
  events_hosted: { type: String, trim: true }
});

userSchema
.virtual('password')
.set(setPassword);

userSchema
.virtual('passwordConfirmation')
.set(setPasswordConfirmation);

userSchema
.path('passwordHash')
.validate(validatePasswordHash);

userSchema
.path('email')
.validate(validateEmail);

userSchema.methods.validatePassword = validatePassword;

module.exports = mongoose.model('User', userSchema);

function setPassword(value) {
  this._password = value;
  this.passwordHash = bcrypt.hashSync(value, bcrypt.genSaltSync(8));
}

function setPasswordConfirmation(passwordConfirmation) {
  this._passwordConfirmation = passwordConfirmation;
}

function validatePasswordHash() {
  if (this.isNew) {
    if (!this._password) {
      return this.invalidate('password', 'A password is required');
    }

    if (this._password !== this._passwordConfirmation) {
      return this.invalidate('passwordConfirmation', 'Passwords do not match');
    }
  }
}


function validateEmail(email) {
  if (!validator.isEmail(email)) {
    return this.invalidate('email', 'must be a valid email address');
  }
}

function validatePassword(password){
  return bcrypt.compareSync(password, this.passwordHash);
}
