module.exports = {
  index: usersIndex,
  update: usersUpdate,
  show: usersShow,
  delete: usersDelete
};

const User    = require('../models/user');

function usersIndex(req, res){
  User.find({}, (err, users) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(200).json(users);
  });
}

function usersShow(req, res){
  User
  .findById(req.params.id)
  .populate(['events', 'interestedIn', 'notInterestedIn', 'events.host'])
  .exec((err, user) => {
    if (err) return res.status(500).json(err);
    if (!user) return res.status(404).json({ error: 'No user was found.' });
    return res.status(200).json(user);
  });
}

function usersUpdate(req, res){
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
    if (err) return res.status(500).json(err);
    if (!user) return res.status(404).json({ error: 'No user was found.'});
    return res.status(200).json(user);
  });
}

function usersDelete(req, res){
  User.findByIdAndRemove(req.params.id, err => {
    if (err) return res.status(500).json(err);
    return res.sendStatus(200);
  });
}
