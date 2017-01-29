<<<<<<< HEAD
const express  = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressJWT = require('express-jwt');


const routes   = require('./api/config/routes');
const app     = express();
const dest    = `${__dirname}/public`;
const config  = require('./api/config/config');

mongoose.connect(config.db);

app.use(bodyParser.json());
app.use(express.static(dest));
=======
const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const expressJWT = require('express-jwt');
const morgan     = require('morgan');

const routes     = require('./api/config/routes');
const app        = express();
const dest       = `${__dirname}/public`;
const config     = require('./api/config/config');

mongoose.connect(config.db);

app.use(bodyParser.json());
app.use(express.static(dest));
app.use(morgan('dev'));
>>>>>>> 6ddf7d30a73a76231d6939a1d6947365e4b9c26d

app.use('/api', expressJWT({ secret: config.secret })
  .unless({
    path: [
      { url: '/api/login', methods: ['POST'] },
      { url: '/api/register', methods: ['POST'] }
    ]
  }));

app.use(jwtErrorHandler);

function jwtErrorHandler(err, req, res, next){
  if (err.name !== 'UnauthorizedError') return next();
  return res.status(401).json({ message: 'Unauthorized request.' });
}

app.use('/api', routes);

app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(config.port, () => console.log(`Express has started on port: ${config.port}`));
