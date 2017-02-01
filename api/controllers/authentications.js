module.exports = {
  register: authenticationsRegister,
  login: authenticationsLogin,
  assign: assign
};

const User      = require('../models/user');
const jwt       = require('jsonwebtoken');
const config    = require('../config/config');

function authenticationsRegister(req, res){

  User.create(req.body, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Something went wrong!' });
    }
    const token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 60*60*24 });
    return res.status(201).json({
      message: `Welcome ${user.firstName}!`,
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
    const token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 60*60*24 });
    return res.status(200).json({
      message: 'Welcome back.',
      user,
      token
    });
  });
}

/*
 * Use the header of 'Bearer 123123123kjnk.jbkkjn12123.bb12jk1kj23n12'
 * Take the token by splitting on the space
 * Use the jwt package to decode the jwt payload (middle part)
 * Use the user id that was in the jwt to find the user
 * Assign the user to `req.user` which can then be passed onto other functions
 */
function assign(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) return res.status(402).json({ message: 'Incorrect JWT token provided.' });
    User.findById(decoded.id, (err, user) => {
      if (err) return res.status(402).json({ message: 'Incorrect JWT token provided.' });
      if (!user) return res.status(402).json({ message: 'Invalid user.'});
      req.user = user;
      return next();
    });
  });
}
