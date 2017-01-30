module.exports = {
  send: sendRequest,
  inbox: myRequests
};

const Request = require('../models/request');

function sendRequest(req, res) {
  const request = new Request(req.body);
  request.save((err, request) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(201).json(request);
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
