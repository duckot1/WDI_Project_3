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
  .patch(users.update)
  .delete(users.delete);

router.route('/events')
  .get(events.index);
router.route('/users/:id/events')
  .post(events.create);
router.route('/events/:id')
  .get(events.show)
  .put(events.update)
  .delete(events.delete);

// /users/:id

// router.route('/events')
//   .get(events.index)
//   .post(events.create);
// router.route('/events/:id')
//   .get(events.show)
//   .put(events.update)
//   .patch(events.update)
//   .delete(events.delete);

// router.route('users/:id')
//   .get(users.show)
//   .get(events.index);

// router.route('/events/:id/users')
//   .post(events.create);
// router.route('/events/:event_id/users/:id')
//   .get(events.show)
//   .put(events.update)
//   .delete(events.delete);

router.route('/requests')
  .post(requests.send);
router.route('/requests/:id')
  .get(requests.show);

module.exports = router;
