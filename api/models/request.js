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
* Set the receiver of this request to be the host of the event
* AND add the request to the event's array of requests & save it
*/
requestSchema.pre('validate', function(done) {
  const self = this;
  if (!self.isNew) return done();
  return self.model('Event').findOne({
    _id: self.event,
    usersInterested: { $ne: self.sender }
  }).then(event => {
    if (!event) {
      return done(new Error('You have already said you are interested in this event.'));
    }

    self.receiver = event.host;
    event.usersInterested.addToSet(self.sender);
    event.requests.addToSet(self._id);
    return event.save();
  }).then(() => {
    return done(null);
  })
  .catch(done);
});

requestSchema.pre('validate', function(done) {
  const self = this;
  if (!self.isNew) return done();
  return self.model('User').findById({
    _id: self.sender,
    interestedIn: { $ne: self.event }
  }).then(user => {
    if (!user) {
      return done(new Error('You have already said you are interested in this event'));
    }

    user.interestedIn.addToSet(self.event);
    user.requests.addToSet(self._id);
    return user.save();
  }).then(() => {
    return done(null);
  })
  .catch(done);
});

/*
* Update the user's interestedIn or notInterestedIn arrays depending on the
* request's interest Boolean value
*/
requestSchema.pre('save', function(done) {
  const self = this;
  return self.model('User').findByIdAndUpdate(self.sender, { $addToSet: { notInterestedIn: self.event }}, done);
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
