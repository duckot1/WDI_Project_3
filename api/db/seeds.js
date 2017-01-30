const mongoose = require('mongoose');
const config   = require('../config/config');
mongoose.connect(config.db);

const User = require('../models/user');

User.collection.drop();

const users = [
  {
    first_name: 'Tom',
    last_name: 'Duckworth',
    email: 'tom@tom.com',
    password: 'password',
    passwordConfirmation: 'password',
    profile_picture: '',
    age: '26',
    latlng: '',
    bio: '',
    events_attended: '',
    events_requested: '',
    events_flaked: '',
    events_hosted: ''
  }, {
    first_name: 'Charlie',
    last_name: 'Gavins',
    email: 'charlie@gavins.com',
    password: 'password',
    passwordConfirmation: 'password',
    profile_picture: '',
    age: '62',
    latlng: '',
    bio: '',
    events_attended: '',
    events_requested: '',
    events_flaked: '',
    events_hosted: ''
  }, {
    first_name: 'Thom',
    last_name: 'Yorke',
    email: 'thom@yorke.com',
    password: 'password',
    passwordConfirmation: 'password',
    profile_picture: '',
    age: '48',
    latlng: '',
    bio: '',
    events_attended: '',
    events_requested: '',
    events_flaked: '',
    events_hosted: ''
  }];

// users.forEach(user => User.create(user, (err, user) => console.log(`${ user.first_name } was saved.`)));

for (var i = 0; i < users.length; i++) {
  User.create(users[i], (err, user) => {
    console.log(err);
    console.log(`${ user.first_name } was saved.`);
  });
}
