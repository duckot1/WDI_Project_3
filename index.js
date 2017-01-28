const express  = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes   = require('./api/config/routes');
const app     = express();
const dest    = `${__dirname}/public`;
const config  = require('./api/config/config');

mongoose.connect(config.db);

app.use(bodyParser.json());
app.use(express.static(dest));
app.use('/api', routes);

app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(config.port, () => console.log(`Express has started on port: ${config.port}`));
