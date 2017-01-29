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
    passwordHash: '',
    profile_picture: 'http://static.stereogum.com/uploads/2015/03/Thom-Yorke.jpg',
    DoB: '08/08/1968',
    latlng: '',
    bio: 'Radiohead man',
    events_attended: '',
    events_requested: '',
    events_flaked: '',
    events_hosted: ''
  },{
    first_name: 'Nils',
    last_name: 'Frahm',
    email: 'nils@frahm.com',
    passwordHash: '',
    profile_picture: 'http://media.briterevolution.com/heroes/artist/thumb/2014/01/29/nilsfrahm.jpg',
    DoB: '20/09/1982',
    latlng: '',
    bio: 'Piano man',
    events_attended: '',
    events_requested: '',
    events_flaked: '',
    events_hosted: ''
  },{
    first_name: 'Brian',
    last_name: 'Eno',
    email: 'brian@eno.com',
    passwordHash: '',
    profile_picture: 'http://www.electronicbeats.net/app/uploads/2015/03/BrianEno_EB.jpg',
    DoB: '15/05/1948',
    latlng: '',
    bio: 'Ambient man',
    events_attended: '',
    events_requested: '',
    events_flaked: '',
    events_hosted: ''}
];

users.forEach(user => User.create(user, (err, user) => console.log(`${user.first_name}`)
));
