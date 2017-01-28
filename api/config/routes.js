const express = require('express');
const router  = express.Router();
const users   = require('../controllers/users');

router.route('/users').get(users.index);










module.exports = router;
