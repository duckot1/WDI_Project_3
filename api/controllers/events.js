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
  .find({}, (err, events) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(events);
  });
}

function eventsCreate(req, res){

  const event = new Event(req.body.event);

  event
  .save((err, event) => {
    if (err) return res.status(500).json(err);
    return res.status(201).json(event);
  });
}

function eventsShow(req, res){

  const id = req.params.id;

  Event
  .findById({ _id: id })
  .populate(['event_host'])
  .exec((err, event) => {
    if (err) return res.status(500).json(err);
    if (!event) return res.status(404).json({ error: 'No event was found.' });
    return res.status(200).json(event);
  });
}

function eventsUpdate(req, res){
  const id = req.params.id;

  Event.findByIdAndUpdate({ _id: id }, req.body.event, {new: true}, (err, event) => {
    if (err) return res.status(500).json(err);
    if (!event) return res.status(404).json({ error: 'No event was found.' });
    return res.status(200).json(event);
  });
}

function eventsDelete(req, res){
  const id = req.params.id;

  Event.findByIdAndRemove({ _id: id }, err => {
    if (err) return res.status(500).json(err);
    return res.sendStatus(200);
  });
}
