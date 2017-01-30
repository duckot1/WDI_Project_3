const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  event_address: { type: String, trim: true, required: true },
  event_lat: { type: String, trim: true },
  event_lng: { type: String, trim: true },
  event_name: { type: String, trim: true, required: true },
  event_description: { type: String, trim: true, required: true },
  event_cost: { type: String },
  event_url: { type: String, trim: true},
  event_img: { type: String, trim: true},
  event_emoji: { type: String, trim: true},
  event_host: { type: mongoose.Schema.ObjectId, ref: 'User' },
  // event_host: { type: String, trim: true},
  event_start_time: { type: Number, trim: true},
  event_finish_time: { type: Number, trim: true},
  event_attendee: { type: mongoose.Schema.ObjectId, ref: 'User' },
  // event_attendee: { type: String, trim: true},
  event_users_interested: { type: mongoose.Schema.ObjectId, ref: 'User' },
  // event_users_interested: { type: String, trim: true},
  event_state: { type: Boolean }
},{
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);

// event_address: { type: String, trim: true, required: true },
// event_lat: { type: String, trim: true },
// event_lng: { type: String, trim: true },
// event_name: { type: String, trim: true, required: true },
// event_description: { type: String, trim: true, required: true },
// event_cost: { type: String },
// event_url: { type: String, trim: true},
// event_img: { type: String, trim: true},
// event_emoji: { type: String, trim: true},
// event_host: { type: mongoose.Schema.ObjectId, ref: 'User' },
// event_start_time: { type: Number, trim: true},
// event_finish_time: { type: Number, trim: true},
// event_attendee: { type: mongoose.Schema.ObjectId, ref: 'User' },
// event_users_interested: { type: mongoose.Schema.ObjectId, ref: 'User' },
// event_state: { type: Boolean }
