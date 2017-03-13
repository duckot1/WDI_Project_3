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
    host: { $ne: req.user.id },
    usersInterested: { $ne: req.user.id },
    _id: { $nin: req.user.notInterestedIn }
  })
  .populate(['host'])
  .exec((err, events) => {
    if (err) return res.status(500).json(err);
    console.log('EVENTS', events);
    return res.status(200).json(events);
  });
}

function eventsCreate(req, res){
  console.log(req.body.event);
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
  .populate(['host', 'requests'])
  .exec((err, event) => {
    if (err) return res.status(500).json(err);
    if (!event) return res.status(404).json({ error: 'No event was found.' });
    return res.status(200).json(event);
  });
}

//the below commented out code is to reject unauthorised requests from the back end but it's too secure at the moment because it doesn't even allow authorized requests unfortunately.

function eventsUpdate(req, res){
  // console.log(req.body.host._id);
  // console.log(req.user._id);
  // if (req.body.host._id===req.user._id){
  Event.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, event) => {
    if (err) return res.status(500).json(err);
    if (!event) return res.status(404).json({ error: 'No event was found.' });
    return res.status(200).json(event);
  });
  // } else {
  //   return res.status(401).json({ error: 'the logged in user is not the event owner' });
  // }
}

function eventsDelete(req, res){
  Event.findByIdAndRemove(req.params.id, err => {
    if (err) return res.status(500).json(err);
    return res.sendStatus(200);
  });
}
