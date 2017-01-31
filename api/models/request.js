const mongoose = require('mongoose');
const statuses = ['pending', 'accepted', 'rejected'];

const requestSchema = new mongoose.Schema({
  text: { type: String, trim: true },
  sender: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  receiver: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  event: { type: mongoose.Schema.ObjectId, ref: 'Event', required: true },
  interested: { type: Boolean, required: true },
  status: { type: String, enum: statuses, default: 'pending' }
}, {
  timestamps: true
});

/*
 * Set the receiver to be the host of the event
 */
requestSchema.pre('validate', function(done) {
  const self = this;
  return self.model('Event').findById(self.event).then(event => {
    self.receiver = event.host;
    return done()
  }).catch(done);
});

/*
 * Update the user's interestedIn or notInterestedIn arrays depending on the
 * request's interest Boolean value
 */
requestSchema.pre('save', function(done) {
  const self = this;
  if (self.interested) {
    return self.model('User').findByIdAndUpdate(self.sender, { $addToSet: { interestedIn: self.event }}, done);
  } else {
    return self.model('User').findByIdAndUpdate(self.sender, { $addToSet: { notInterestedIn: self.event }}, done);
  }
});

/*
 * When a request's status has been changed to 'accepted', we need to update all of the other requests to be 'rejected'
 */
requestSchema.pre('save', function(done) {
  const self = this;
  if (self.isNew) return done();
  if (self.isModified('status') && self.status === 'accepted') {
    return self.model('Request').update({
      _id: { $ne: [self._id] },
      event: self.event
    }, {
      status: 'rejected'
    }, {
      multi: true
    }).then(() => {
      return done(null);
    }).catch(done);
  }
});

/*
 * When a request's status has been changed to 'accepted', we need to update the event's `active` property to be false
 */
requestSchema.pre('save', function(done) {
  const self = this;
  if (self.isNew) return done();
  if (self.isModified('status') && self.status === 'accepted') {
    return self.model('Event').findByIdAndUpdate(self.event, { active: false }).then(() => {
      return done(null);
    }).catch(done);
  }
});

module.exports = mongoose.model('Request', requestSchema);
