const mongoose = require('mongoose');
const config   = require('../config/config');
const async      = require('async');
const Bluebird   = require('bluebird');

mongoose.Promise = Bluebird;

mongoose.connect(config.db);

const User = require('../models/user');
const Event = require('../models/event');

User.collection.drop();
Event.collection.drop();

async.waterfall([
  createUsers,
  createEvents
], function(err) {
  if (err) return console.log(err);
  console.log('Seeding complete');
  return process.exit();
});

function createUsers(done){
  const users     = [
    {
      first_name: 'Thom',
      last_name: 'Yorke',
      email: 'thom@yorke.com',
      profile_picture: 'http://static.stereogum.com/uploads/2015/03/Thom-Yorke.jpg',
      DoB: '08/08/1968',
      lat: '51.522245',
      lng: '-0.083897',
      bio: 'Radiohead man',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      first_name: 'Nils',
      last_name: 'Frahm',
      email: 'nils@frahm.com',
      profile_picture: 'http://media.briterevolution.com/heroes/artist/thumb/2014/01/29/nilsfrahm.jpg',
      DoB: '20/09/1982',
      lat: '51.522245',
      lng: '-0.083897',
      bio: 'Piano man',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      first_name: 'Brian',
      last_name: 'Eno',
      email: 'brian@eno.com',
      profile_picture: 'http://www.electronicbeats.net/app/uploads/2015/03/BrianEno_EB.jpg',
      DoB: '15/05/1948',
      lat: '51.522245',
      lng: '-0.083897',
      bio: 'Ambient man',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      first_name: 'Damon',
      last_name: 'Albarn',
      email: 'damon@albarn.com',
      profile_picture: 'https://s-media-cache-ak0.pinimg.com/originals/2f/13/73/2f1373dd2352bd91afd72b1ee3138bdb.jpg',
      DoB: '23/07/1968',
      latlng: '51.522245, -0.083897',
      bio: 'Ambient man',
      password: 'password',
      passwordConfirmation: 'password'
    }
  ];

  Bluebird.map(users, user => {
    return User.create(user);
  }).then((users) => {
    done(null);
  }).catch(done);
}


function createEvents(done){
  User.find((err, users) => {
    const events = [
      {
        event_address: '2, Oliver’s Yard, 55 City Rd, London EC1Y 1HQ',
        event_lat: '51.523928',
        event_lng: '-0.086171',
        event_name: 'Coffee with Thom',
        event_description: 'Enjoy this place I\'ve never been to',
        event_cost: '£100',
        event_url: 'http://lantanacafe.co.uk/',
        event_img: 'http://combiboilersleeds.com/images/coffee/coffee-2.jpg',
        event_emoji: '☕',
        event_host: users[0]._id,
        event_start_time: 1000,
        event_finish_time: 1100,
        event_attendee: users[1]._id,
        event_users_interested: users[2]._id,
        event_state: false
      },{
        event_address: '32-37 Cowper St, London EC2A 4AP',
        event_lat: '51.525397',
        event_lng: '-0.086171',
        event_name: 'Rave with Nils',
        event_description: 'lets go to a club night',
        event_cost: 'free',
        event_url: 'http://xoyo.co.uk//',
        event_img: 'https://lh3.googleusercontent.com/-schD0n5b6xc/UeB4EKnjIHI/AAAAAAAEArA/A2LVs-7MtR4GlptzMcuk9MvXd7S1oYIogCJkC/s408-k-no/',
        event_emoji: '💃',
        event_host: users[1]._id,
        event_start_time: 2100,
        event_finish_time: 0300,
        event_attendee: null,
        event_users_interested:  [`${users[2]._id}`,`${users[0]._id}`],
        event_state: true
      },{
        event_address: '100-106 Leonard St, London EC2A 4RH',
        event_lat: '51.524534',
        event_lng: '-0.081499',
        event_name: 'Read some books',
        event_description: 'lets go for ham eggs and chips!',
        event_cost: '£30',
        event_url: 'http://wearetbc.com//',
        event_img: 'http://www.wearetbc.com/wp-content/themes/thebookclub/images/logo.svg',
        event_emoji: '📚',
        event_host: users[2]._id,
        event_start_time: 2100,
        event_finish_time: 0300,
        event_attendee: '',
        event_users_interested: [`${users[1]._id}`,`${users[0]._id}`],
        event_state: true
      },
    ];
    if (err) return done(err);
    events.forEach(event => Event.create(event, (err, event) => {
      console.log(event);
      if (err) return done(err);
      done(null);
    }));
  });
}
