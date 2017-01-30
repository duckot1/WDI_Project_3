const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  name: {type: String },
  text: {type: String },
  sender_id: { type: mongoose.Schema.ObjectId, ref: 'User' },
  receiver_id: { type: mongoose.Schema.ObjectId, ref: 'User' },
  event_id: { type: mongoose.Schema.ObjectId, ref: 'Event'}
}, {
  timestamps: true
});

module.exports = mongoose.model('Request', requestSchema);
