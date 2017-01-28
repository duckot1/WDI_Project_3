const express  = require('express');
const mongoose = require('mongoose');
const routes   = require('./api/config/routes');
const port     = process.env.PORT || 3000;
const app     = express();
const dest    = `${__dirname}/public`;

mongoose.connect('mongodb://localhost:27017/clubmate');

app.use(express.static(dest));
app.use('/api', routes);

app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(port, () => console.log(`Express has started on port: ${port}`));
