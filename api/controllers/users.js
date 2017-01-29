module.exports = {
  // index: usersIndex,
  create: usersCreate,
  update: usersUpdate,
  show: usersShow
};

const User    = require('../models/user');
const Project = require('../models/event');

// function usersIndex(req, res){
//   User.find((err, users) => {
//     if (err) return res.status(500).json({ message: 'Something went wrong.' });
//     return res.status(200).json(users);
//   });
// }

function usersShow(req, res){
  const id = req.paramsid;
  User.findbyID({ _id: id }, (err, users) => {
    if (err) return res.status(500).json(err);
    if (!users) return res.status(404).json({ error: 'No user was found.' });
    return res.status(200).json(user);
  });
}

function usersUpdate(req, res){
  const id = req.params.id;

  User.findbyIdAndUpdate({ _id: id }, req.body.user, (err, user) => {
    if (err) return res.status(500).json(err);
    if (!user) return res.status(404).json({ error: 'No user was found.'});
    return res.status(200).json(user);
  });
}
