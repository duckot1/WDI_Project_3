const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  event_location: { type: String, trim: true, required: true },
  event_name: { type: String, trim: true, required: true },
  event_description: { type: String, trim: true, required: true },
  event_cost: { type: Number },
  event_url: { type: String, trim: true},
  event_img: { type: String, trim: true},
  event_emoji: { type: String, trim: true},
  event_comments: { type: String, trim: true},
  event_host: { type: String, trim: true},
  event_attendee: { type: String, trim: true},
  event_start_time: { type: String, trim: true},
  event_finish_time: { type: String, trim: true}
},{
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);
