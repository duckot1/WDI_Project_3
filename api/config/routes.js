const express         = require('express');
const router          = express.Router();

const authentications = require('../controllers/authentications');
const events          = require('../controllers/events');
const users           = require('../controllers/users');
const requests        = require('../controllers/requests');

/*
 * UNPROTECTED
 */

router.route('/register')
  .post(authentications.register);
router.route('/login')
  .post(authentications.login);

/*
 * PROTECTED
 */

router.route('/users')
  .get(users.index);
router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);
router.route('/events')
  .get(events.index)
  .post(authentications.assign, events.create);
router.route('/events/:id')
  .get(events.show)
  .put(events.update)
  .delete(events.delete);
router.route('/requests')
  .get(requests.index)
  .post(authentications.assign, requests.create);
router.route('/requests/:id')
  .get(requests.inbox)
  .put(requests.update);

module.exports = router;
