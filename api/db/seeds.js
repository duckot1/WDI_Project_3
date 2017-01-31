const mongoose = require('mongoose');
const config   = require('../config/config');
const async      = require('async');
const Bluebird   = require('bluebird');

mongoose.Promise = Bluebird;

mongoose.connect(config.db, () => {
  console.log(`Connected to ${config.db}`);
});

const User    = require('../models/user');
const Event   = require('../models/event');
const Request = require('../models/request');

async.waterfall([
  dropCollections,
  createUsers,
  createFirstEvent,
  createFirstRequest,
  createSecondRequest,
  createThirdRequest,
  pickAttendee
], function(err) {
  if (err) return console.log(err);
  console.log('Seeding complete');
  return process.exit();
});

function dropCollections(done) {
  User.collection.drop();
  Event.collection.drop();
  done();
}

function createUsers(done){
  const users = [
    {
      firstName: 'Thom',
      lastName: 'Yorke',
      email: 'thom@yorke.com',
      profile_picture: 'http://static.stereogum.com/uploads/2015/03/Thom-Yorke.jpg',
      dob: '08/08/1968',
      lat: '51.522245',
      lng: '-0.083897',
      bio: 'Radiohead man',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstName: 'Nils',
      lastName: 'Frahm',
      email: 'nils@frahm.com',
      profile_picture: 'http://media.briterevolution.com/heroes/artist/thumb/2014/01/29/nilsfrahm.jpg',
      dob: '20/09/1982',
      lat: '51.522245',
      lng: '-0.083897',
      bio: 'Piano man',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstName: 'Brian',
      lastName: 'Eno',
      email: 'brian@eno.com',
      profile_picture: 'http://www.electronicbeats.net/app/uploads/2015/03/BrianEno_EB.jpg',
      dob: '15/05/1948',
      lat: '51.522245',
      lng: '-0.083897',
      bio: 'Ambient man',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstName: 'Damon',
      lastName: 'Albarn',
      email: 'damon@albarn.com',
      profile_picture: 'https://s-media-cache-ak0.pinimg.com/originals/2f/13/73/2f1373dd2352bd91afd72b1ee3138bdb.jpg',
      dob: '23/07/1968',
      latlng: '51.522245, -0.083897',
      bio: 'Ambient man',
      password: 'password',
      passwordConfirmation: 'password'
    }
  ];

  Bluebird.map(users, user => {
    return User.create(user);
  }).then(users => {
    console.log(`${users.length} were created.`);
    done(null);
  }).catch(done);
}

function createFirstEvent(done){
  User.findOne({
    email: 'thom@yorke.com'
  }).then(user => {
    const today = new Date();
    const event = new Event({
      address: '2, Oliver’s Yard, 55 City Rd, London EC1Y 1HQ',
      lat: '51.523928',
      lng: '-0.086171',
      name: 'Coffee with Thom',
      description: 'Enjoy this place I\'ve never been to',
      cost: '£100',
      url: 'http://lantanacafe.co.uk/',
      img: 'http://combiboilersleeds.com/images/coffee/coffee-2.jpg',
      emoji: '☕',
      host: user._id,
      startTime: today.setDate(today.getDate() + 10),
      finishTime: today.setDate(today.getDate() + 11)
    });
    return event.save();
  })
  .then(event => {
    console.log(`${event.description} was created`);
    return done(null, event);
  })
  .catch(done);
}

function createFirstRequest(event, done) {
  User.findOne({
    email: 'brian@eno.com'
  })
  .then(user => {
    const request = new Request({
      text: 'Thom what\'s kicking?',
      sender: user._id,
      event: event._id,
      interested: true
    });
    return request.save();
  })
  .then(request => {
    console.log(`${request.text} was created`);
    done(null, event);
  })
  .catch(done);
}

function createSecondRequest(event, done) {
  User.findOne({
    email: 'nils@frahm.com'
  })
  .then(user => {
    const request = new Request({
      text: 'Yo let\'s party Thom.',
      sender: user._id,
      event: event._id,
      interested: true
    });
    return request.save();
  })
  .then(request => {
    console.log(`${request.text} was created`);
    done(null, event);
  })
  .catch(done);
}

function createThirdRequest(event, done) {
  User.findOne({
    email: 'damon@albarn.com'
  })
  .then(user => {
    const request = new Request({
      text: 'Who is dis?',
      sender: user._id,
      event: event._id,
      interested: false
    });
    return request.save();
  })
  .then(request => {
    console.log(`${request.text} was created`);
    done(null, event);
  })
  .catch(done);
}

function pickAttendee(event, done) {
  User.findOne({
    email: 'nils@frahm.com'
  }).then(user => {
    return Request.findOne({
      event: event._id,
      sender: user._id
    });
  }).then(request => {
    request.status = 'accepted';
    return request.save();
  }).then(request => {
    console.log(`${request.text} was accepted`);
    return done(null);
  })
  .catch(done);
}
