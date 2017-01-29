const mongoose = require('mongoose');
const config   = require('../config/config');
mongoose.connect(config.db);

const User = require('../models/user');

User.collection.drop();

const users = [
  {
    first_name: 'Thom',
    last_name: 'Yorke',
    email: 'thom@yorke.com',
    profile_picture: 'http://static.stereogum.com/uploads/2015/03/Thom-Yorke.jpg',
    DoB: '08/08/1968',
    latlng: 'filler',
    bio: 'Radiohead man',
    events_attended: 'filler',
    events_requested: 'filler',
    events_flaked: 'filler',
    events_hosted: 'filler',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    first_name: 'Nils',
    last_name: 'Frahm',
    email: 'nils@frahm.com',
    profile_picture: 'http://media.briterevolution.com/heroes/artist/thumb/2014/01/29/nilsfrahm.jpg',
    DoB: '20/09/1982',
    latlng: 'filler',
    bio: 'Piano man',
    events_attended: 'filler',
    events_requested: 'filler',
    events_flaked: 'fillerfiller',
    events_hosted: 'filler',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    first_name: 'Brian',
    last_name: 'Eno',
    email: 'brian@eno.com',
    profile_picture: 'http://www.electronicbeats.net/app/uploads/2015/03/BrianEno_EB.jpg',
    DoB: '15/05/1948',
    latlng: 'filler',
    bio: 'Ambient man',
    events_attended: 'filler',
    events_requested: 'filler',
    events_flaked: 'filler',
    events_hosted: 'filler',
    password: 'password',
    passwordConfirmation: 'password'
  }
];

users.forEach(user => User.create(user, (err, user) => console.log(user)
));
