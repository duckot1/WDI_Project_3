module.exports = {
  register: authenticationsRegister,
  login: authenticationsLogin
};

const User = require('../models/user');
const jwt      = require('jsonwebtoken');
const config = require('../config/config');

function authenticationsRegister(req, res){
  User.create(req.body.user, (err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    const token = jwt.sign(user._id, config.secret, { expiresIn: 60*60*24 });
    return res.status(201).json({
<<<<<<< HEAD
      message: `Welcome ${user.username}!`,
=======
      message: `Welcome ${user.first_name}!`,
>>>>>>> 6ddf7d30a73a76231d6939a1d6947365e4b9c26d
      user,
      token
    });
  });
}

function authenticationsLogin(req, res) {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).json({ message: 'something went wrong init' });
    if (!user || !user.validatePassword(req.body.password)) {
      return res.status(401).json({ message: ' Unauthorised' });
    }
    const token = jwt.sign(user._id, config.secret, { expiresIn: 60*60*24 });
    return res.status(200).json({
      message: 'Welcome back.',
      user,
      token
    });
  });
}
