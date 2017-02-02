const express         = require('express');
const router          = express.Router();

const authentications = require('../controllers/authentications');
const events          = require('../controllers/events');
const users           = require('../controllers/users');
const requests        = require('../controllers/requests');

/*
 * UNPROTECTED
 */
router.route('landing')
  .post(authentications.register, authentications.login);
router.route('/register')
  .post(authentications.register);
router.route('/login')
  .post(authentications.login);

/*
 * PROTECTED
 */

router.route('/users')
  .get(authentications.assign, users.index);
router.route('/users/:id')
  .get(authentications.assign, users.show)
  .put(authentications.assign, users.update)
  .delete(authentications.assign, users.delete);
router.route('/events')
  .get(authentications.assign, events.index)
  .post(authentications.assign, events.create);
router.route('/events/:id')
  .get(authentications.assign, events.show)
  .put(authentications.assign, events.update)
  .delete(authentications.assign, events.delete);
router.route('/requests')
  .get(authentications.assign, requests.index)
  .post(authentications.assign, requests.create);
router.route('/requests/:id')
  .put(authentications.assign, requests.update);
router.route('/users/:id/inbox')
  .get(authentications.assign, requests.inbox);
router.route('/users/:id/outbox')
  .get(authentications.assign, requests.outbox);

module.exports = router;
