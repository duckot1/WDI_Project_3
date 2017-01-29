const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/clubmate';
mongoose.connect(databaseUrl);

const User = require('../models/user');

User.collection.drop();

const user = new User({
  first_name: 'Tom',
  last_name: 'Duckworth',
  email: 'tom@tom.com',
  age: '99'
});

user.save(function (err, user){
  if (err) return console.log(err);
  console.log('user saved', user);
});
