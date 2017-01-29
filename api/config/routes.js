const express         = require('express');
const router          = express.Router();

const authentications = require('../controllers/authentications');
const events          = require('../controllers/events');
const users           = require('../controllers/users');


router.route('/events')
  .get(events.index)
  .post(events.create);
router.route('events/:id')
  .get(events.show)
  .get(users.index)
  .put(events.update)
  .patch(events.update)
  .delete(events.delete);

router.route('users/:id')
  .get(users.show)
  .get(events.index);

router.route('/register')
.post(authentications.register);
router.route('/login')
.post(authentications.login);


module.exports = router;
