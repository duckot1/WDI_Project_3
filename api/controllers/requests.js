module.exports = {
  create: requestsCreate,
  show: requestsShow,
  inbox: myRequests,
  update: requestsUpdate,
  index: requestsIndex
};

const Request = require('../models/request');

function requestsCreate(req, res) {
  const request  = new Request(req.body);
  request.sender = req.user._id;

  request.save((err, request) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(201).json(request);
  });
}

function requestsShow(req, res) {
  Request.findById(req.params.id, (err, request) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!request) return res.status(404).json({ message: 'No request found.' });
    return res.status(200).json(request);
  });
}

function requestsUpdate(req, res){
  Request.findByIdAndUpdate(req.params.id, req.body.request, { new: true }, (err, request) => {
    if (err) return res.status(500).json(err);
    if (!request) return res.status(404).json({ error: 'No event was found.' });
    return res.status(200).json(request);
  });
}

function myRequests(req, res) {
  Request
  .find({receiver_id: { $eq: req.params.id }})
  .populate('sender_id')
  .populate('receiver_id')
  .populate('event_id')
  .exec(function (err, requests) {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(200).json(requests);
  });
}

function requestsIndex(req, res){
  console.log('running');
  Request.find({}, (err, requests) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(200).json(requests);
  });
}
