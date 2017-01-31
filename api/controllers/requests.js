module.exports = {
  send: requestsCreate,
  show: requestsShow,
  inbox: myRequests
};

const Request = require('../models/request');

function requestsCreate(req, res) {
  const request = new Request(req.body);
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

function myRequests(req, res) {
  // Request
  // .find({receiver_id: { $eq: req.params.id }})
  // .populate('sender_id')
  // .populate('receiver_id')
  // .populate('event_id')
  // .exec(function (err, requests) {
  //   if (err) return res.status(500).json({ message: 'Something went wrong.' });
  //   return res.status(200).json(requests);
  // });
}
