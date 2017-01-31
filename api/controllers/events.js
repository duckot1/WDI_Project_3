// const User  = require('../models/user');
const Event = require('../models/event');

module.exports = {
  index: eventsIndex,
  create: eventsCreate,
  show: eventsShow,
  update: eventsUpdate,
  delete: eventsDelete
};

function eventsIndex(req, res){
  Event
  .find({
    active: true,
    host: { $ne: req.user._id },
    requests: { $ne: req.user.requests }
  })
  .populate(['host'])
  .exec((err, events) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(events);
  });
}

function eventsCreate(req, res){
  const event = new Event(req.body.event);
  event.host  = req.user._id;
  event
  .save((err, event) => {
    if (err) return res.status(500).json(err);
    return res.status(201).json(event);
  });
}

function eventsShow(req, res){
  Event
  .findById(req.params.id)
  .populate(['host'])
  .exec((err, event) => {
    if (err) return res.status(500).json(err);
    if (!event) return res.status(404).json({ error: 'No event was found.' });
    return res.status(200).json(event);
  });
}

function eventsUpdate(req, res){
  Event.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, event) => {
    if (err) return res.status(500).json(err);
    if (!event) return res.status(404).json({ error: 'No event was found.' });
    return res.status(200).json(event);
  });
}

function eventsDelete(req, res){
  Event.findByIdAndRemove(req.params.id, err => {
    if (err) return res.status(500).json(err);
    return res.sendStatus(200);
  });
}
