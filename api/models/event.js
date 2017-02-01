const mongoose = require('mongoose');

/*
 * KEY
 *
 * host:          The user who created the event.
 * attendee:      The confirmed user who has been chosen to attend the event.
 * interested:    An array of users who are interested in attending the event
                  but have not been confirmed by the host .
 * notInterested: An array of users who are not interested in attending.
 */

const eventSchema = new mongoose.Schema({
  address: { type: String, trim: true, required: true },
  name: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  lat: { type: String, trim: true },
  lng: { type: String, trim: true },
  cost: { type: String },
  url: { type: String, trim: true },
  img: { type: String, trim: true },
  emoji: { type: String, trim: true} ,
  startTime: { type: Date },
  finishTime: { type: Date },
  host: { type: mongoose.Schema.ObjectId, ref: 'User' },
  usersInterested: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  requests: [{ type: mongoose.Schema.ObjectId, ref: 'Request' }],
  active: { type: Boolean, default: false }
},{
  timestamps: true
});


/*
 * You shouldn't be able to create an event if you already have one that is
 * active.
 */




// eventSchema.pre('validate', function(done) {
//   const self = this;
//   return self.model('Event').findOne({
//     host: self.host,
//     active: true
//   }).then(event => {
//     if (event) return self.invalidate('active', 'You aren\'t allowed to create two active events.');
//     return done();
//   }).catch(done);
// });

/*
 * Add the event to the user who created the event
 */
eventSchema.pre('save', function(done) {
  const self = this;
  return self.model('User').findByIdAndUpdate(self.host, { $addToSet: { events: self._id }}, done);
});


module.exports = mongoose.model('Event', eventSchema);
