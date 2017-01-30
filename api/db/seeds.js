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
    lat: '51.522245',
    lng: '-0.083897',
    bio: 'Radiohead man',
    events_attended: '',
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
    lat: '51.522245',
    lng: '-0.083897',
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
    lat: '51.522245',
    lng: '-0.083897',
    bio: 'Ambient man',
    events_attended: 'filler',
    events_requested: 'filler',
    events_flaked: 'filler',
    events_hosted: 'filler',
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


const events = [
  {
    event_address: '
2, Oliver’s Yard, 55 City Rd, London EC1Y 1HQ',
    event_latlng: '51.523928, -0.086171',
    event_name: 'Coffee with Thom',
    event_description: 'Enjoy this place I\'ve never been to',
    event_cost: '£100',
    event_url: 'http://lantanacafe.co.uk/',
    event_img: 'http://lantanacafe.co.uk/wp-content/uploads/2015/06/lantana-logox1.png',
    event_emoji: '☕',
    event_host: users[0]._id,
    event_start_time: 1000,
    event_finish_time: 1100,
    event_attendee: users[1].id,
    event_users_interested: users[2].id,
    event_state: false
  },{
    timestamps: true
  }
]
