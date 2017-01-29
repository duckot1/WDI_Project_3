const mongoose = require('mongoose');
const config   = require('../config/config');
mongoose.connect(config.db);

const User = require('../models/user');

User.collection.drop();

const users = [
  {
    first_name: 'Tom',
    last_name: 'Duckworth',
    email: 'tom@tom12.com',
    passwordHash: '',
    profile_picture: '',
    DoB: '',
    latlng: '',
    bio: '',
    events_attended: '',
    events_requested: '',
    events_flaked: '',
    events_hosted: ''
  },{
    first_name: 'Charlie',
    last_name: 'Gavins',
    email: 'charlie@gavins12.com',
    passwordHash: '',
    profile_picture: '',
    DoB: '',
    latlng: '',
    bio: '',
    events_attended: '',
    events_requested: '',
    events_flaked: '',
    events_hosted: ''
  },{
    first_name: 'Thom',
    last_name: 'Yorke',
    email: 'thom@yorke12.com',
    passwordHash: '',
    profile_picture: '',
    DoB: '',
    latlng: '',
    bio: '',
    events_attended: '',
    events_requested: '',
    events_flaked: '',
    events_hosted: ''}
];

users.forEach(user => User.create(user, (err, user) => console.log(`${user.first_name}`)
));
