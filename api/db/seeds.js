const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/clubmate';
mongoose.connect(databaseUrl);

const User = require('../models/user');

User.collection.drop();

const users = [
  {first_name: 'Tom',
    last_name: 'Duckworth',
    email: 'tom@tom.com',
    passwordHash: '',
    profile_picture: '',
    DoB: '',
    latlng: '',
    bio: '',
    events_attended: '',
    events_requested: '',
    events_flaked: '',
    events_hosted: ''},
  {first_name: 'Charlie',
    last_name: 'Gavins',
    email: 'charlie@gavins.com',
    passwordHash: '',
    profile_picture: '',
    DoB: '',
    latlng: '',
    bio: '',
    events_attended: '',
    events_requested: '',
    events_flaked: '',
    events_hosted: ''},
  {first_name: 'Thom',
    last_name: 'Yorke',
    email: 'thom@yorke.com',
    passwordHash: '',
    profile_picture: '',
    DoB: '',
    latlng: '',
    bio: '',
    events_attended: '',
    events_requested: '',
    events_flaked: '',
    events_hosted: ''}];



for (let i=0;i<users.length; i++){
  users[i].create(function(err, user) {
    if (err) return console.log(err);
    console.log('user saved', user);
  });
}
