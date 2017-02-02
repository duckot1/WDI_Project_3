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
  // pickAttendee,
  createSecondEvent,
  createFourthRequest,
  createFifthRequest,
  createSixthRequest,
  // pickSecondAttendee,
  createThirdEvent,
  createSeventhRequest,
  createEightRequest,
  createNinthRequest,
  // pickThirdAttendee,
  createFourthEvent,
  createTenthRequest,
  createEleventhRequest,
  createTwelfthRequest,
  // pickFourthAttendee,
  createFifthEvent,
  createThirteenthRequest,
  createFourteenthRequest,
  createFifteenthRequest,
  pickFifthAttendee,
  createSixthEvent,
  createSixteenthRequest,
  createSeventeenthRequest,
  createEighteenthRequest,
  pickSixthAttendee
  // createSeventhEvent,
  // createNinteenthRequest,
  // createTwentiethRequest,
  // createTwentyfirstRequest,
  // pickSeventhAttendee,
  // createEightEvent,
  // createTwentysecondRequest,
  // createTwentythirdRequest,
  // createTwentyfourthRequest,
  // pickEightAttendee,
  // createNinthEvent,
  // createTwentyfifthRequest,
  // createTwentysixthRequest,
  // createTwentyseventhRequest,
  // pickNinthAttendee,
  // createTenthEvent,
  // createTwentyeightRequest,
  // createTwentyninthRequest,
  // createThirtiethRequest,
  // pickTenthAttendee,
  // createEleventhEvent,
  // createThirtyfirstRequest,
  // createThirtysecondRequest,
  // createThirtythirdRequest,
  // pickEleventhAttendee,
  // createTwelfthEvent,
  // createThirtyfourthRequest,
  // createThirtyfifthRequest,
  // createThirtysixthRequest,
  // pickTwelfthAttendee,
  // createThirteenthEvent,
  // createThirtyseventhRequest,
  // createThirtyeightRequest,
  // createThirtyninthRequest,
  // pickThirteenthAttendee,
  // createFourtheenthEvent,
  // createFourthiethRequest,
  // createFourtyfirstRequest,
  // createFourtysecondRequest,
  // pickFourteenthAttendee,
  // createFiftheenthEvent,
  // createFourtythirdRequest,
  // createFourtyfourthRequest,
  // createFourtyfifthRequest,
  // pickFiftheenthAttendee,
  // createSisxteenthEvent,
  // createFourtysixthRequest,
  // createFourtyseventhRequest,
  // createFourtyeightRequest,
  // pickSixteenthAttendee,
  // createSeventeenthEvent,
  // createFourtynineRequest,
  // createFiftiethRequest,
  // createFiftyfirstRequest,
  // pickSeventeenthAttendee,
  // createEighteenthEvent,
  // createFiftysecondRequest,
  // createFiftythirdRequest,
  // createFiftyfourthRequest,
  // pickEighteenthAttendee,
  // createNineteenthEvent,
  // createFiftyfifthRequest,
  // createFiftysixthRequest,
  // createFiftyseventhRequest,
  // pickNineteenthAttendee,
  // createTwentiethEvent,
  // createFiftyeightRequest,
  // createFiftyninthRequest,
  // createSixtiethRequest,
  // pickTwentiethAttendee,

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
      profilePicture: 'http://static.stereogum.com/uploads/2015/03/Thom-Yorke.jpg',
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
      profilePicture: 'http://media.briterevolution.com/heroes/artist/thumb/2014/01/29/nilsfrahm.jpg',
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
      profilePicture: 'http://www.electronicbeats.net/app/uploads/2015/03/BrianEno_EB.jpg',
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
      profilePicture: 'https://s-media-cache-ak0.pinimg.com/originals/2f/13/73/2f1373dd2352bd91afd72b1ee3138bdb.jpg',
      dob: '23/07/1968',
      latlng: '51.522245, -0.083897',
      bio: 'Ambient man',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstName: 'Beyonce',
      lastName: 'Knowles',
      email: 'beyonce@knowles.com',
      profilePicture: 'http://www.hdwallpapers3d.com/wp-content/uploads/2013/06/beyonce-knowles-wallpaper3.jpg',
      dob: '01/09/83',
      bio: 'Triple Threat',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstName: 'Preston',
      lastName: 'Oshita',
      email: 'towkio@towkio.com',
      profilePicture: 'http://www.traktivist.com/wp-content/uploads/2015/08/TOWKIO.jpg',
      dob: '02/04/1991',
      bio: 'I rap',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstName: 'Harley E.',
      lastName: 'Streten',
      email: 'flume@flume.com',
      profilePicture: 'http://crispycrustrecs.com/wp-content/uploads/2015/05/flume.png',
      dob: '05/11/1991',
      bio: 'Flume',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstName: 'Matthew',
      lastName: 'Walker',
      email: 'julio@bashmore.com',
      profilePicture: 'https://www.residentadvisor.net/images/features/2015/julio-bashmore-pop-fish.jpg',
      dob: '03/04/1990',
      bio: 'DJ',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstName: 'Monica',
      lastName: 'Belluci',
      email: 'monica@belluci.com',
      profilePicture: 'http://provocative-woman.com/wp-content/uploads/2016/08/29.jpg',
      dob: '30/09/1964',
      bio: 'Actress/Model',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstName: 'Louis',
      lastName: 'Celestin',
      email: 'kaytranada@kaytranada.com',
      profilePicture: 'http://www.djoybeat.com/wp-content/uploads/2013/09/kaytranada-2.jpg',
      dob: '25/08/1992',
      bio: 'Music Producer',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstName: 'Kelela',
      lastName: 'Mizanekristos',
      email: 'kelela@miz.com',
      profilePicture: 'https://warpnet-media.s3.amazonaws.com/1c37853afa53a0150b1d27cda3a83faf9f7f5470be8eacbe6f8b615d',
      dob: '06/06/1983',
      bio: 'Singer, Artist and Songwriter',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstName: 'David',
      lastName: 'Gilmour',
      email: 'david@gilmour.com',
      profilePicture: 'http://ace-bootlegs.com/wp-content/uploads/ARTISTES%20PRESENTATION/gilmour0.jpg',
      dob: '06/03/1946',
      bio: 'Pink Floyd',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstName: 'Emma',
      lastName: 'Stone',
      email: 'emma@stone.com',
      profilePicture: 'http://hbz.h-cdn.co/assets/cm/15/03/54b48d181df50_-_hbz-gg-2015-beauty-emma-stone-promo.jpg',
      dob: '06/11/1988',
      bio: 'Actress',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstName: 'Kerry',
      lastName: 'Washington',
      email: 'kerry@washington.com',
      profilePicture: 'https://s-media-cache-ak0.pinimg.com/originals/79/ac/86/79ac865dc1ab576d2b114baad37e6b8c.jpg',
      dob: '31/01/1977',
      bio: 'Actress',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstName: 'Yayoi',
      lastName: 'Kusama',
      email: 'yayoi@kusama.com',
      profilePicture: 'http://jojoscope.com/wp-content/uploads/zz-fs-maristela-5-yayoi.jpg',
      dob: '22/03/1929',
      bio: 'Artist',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstName: 'Barack',
      lastName: 'Obama',
      email: 'barack@obama.com',
      profilePicture: 'http://www.billboard.com/files/styles/promo_650/public/media/President-Barack-Obama-2014-billboard-650.jpg',
      dob: '04/08/1961',
      bio: 'unemployed atm - lots of free time',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstName: 'Gautama',
      lastName: 'Buddha',
      email: 'gautama@buddha.com',
      profilePicture: 'http://www.isow-wageningen.org/wp-content/uploads/2016/04/buddha.jpg',
      dob: '567bc',
      bio: 'A spiritual leader, offering guidance',
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

function createSecondEvent(done){
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

function createFourthRequest(event, done) {
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

function createFifthRequest(event, done) {
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

function createSixthRequest(event, done) {
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

function pickSecondAttendee(event, done) {
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

function createThirdEvent(done){
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

function createSeventhRequest(event, done) {
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

function createEightRequest(event, done) {
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

function createNinthRequest(event, done) {
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

function pickThirdAttendee(event, done) {
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

function createFourthEvent(done){
  User.findOne({
    email: 'beyonce@knowles.com'
  }).then(user => {
    const today = new Date();
    const event = new Event({
      address: 'Karaoke Box, Soho 18 Frith Street, London W1D 4RQ',
      lat: '51.523928',
      lng: '-0.086171',
      name: 'Karoke Night',
      description: 'Let\'s sing the latest hits and have a few drinks',
      cost: '£35',
      url: 'http://www.karaokebox.co.uk/soho/bookings/',
      img: 'https://i.ytimg.com/vi/1IrmiCTBJA4/maxresdefault.jpg',
      emoji: '',
      host: user._id,
      startTime: today.setDate(today.getDate() + 12),
      finishTime: today.setDate(today.getDate() + 13)
    });
    return event.save();
  })
  .then(event => {
    console.log(`${event.description} was created`);
    return done(null, event);
  })
  .catch(done);
}

function createTenthRequest(event, done) {
  User.findOne({
    email: 'flume@flume.com'
  })
  .then(user => {
    const request = new Request({
      text: 'Love singing, let\'s do it',
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

function createEleventhRequest(event, done) {
  User.findOne({
    email: 'kaytranada@kaytranada.com'
  })
  .then(user => {
    const request = new Request({
      text: 'Yo let\'s party Beyonce.',
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

function createTwelfthRequest(event, done) {
  User.findOne({
    email: 'damon@albarn.com'
  })
  .then(user => {
    const request = new Request({
      text: 'I\'m the Don at Karaoke. It will be a blast',
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

function pickFourthAttendee(event, done) {
  User.findOne({
    email: 'flume@flume.com'
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
function createFifthEvent(done){
  User.findOne({
    email: 'david@gilmour.com'
  }).then(user => {
    const today = new Date();
    const event = new Event({
      address: 'Lee Valley White Water Centre, Station Road, Waltham Cross, Hertfordshire, EN9 1AB',
      lat: '51.523928',
      lng: '-0.086171',
      name: 'White water rafting',
      description: 'Exciting day out',
      cost: '£38',
      url: 'https://www.gowhitewater.co.uk/canoeing-and-kayaking',
      img: 'https://i.ytimg.com/vi/onhFft3qMk8/maxresdefault.jpg',
      host: user._id,
      startTime: today.setDate(today.getDate() + 15),
      finishTime: today.setDate(today.getDate() + 16)
    });
    return event.save();
  })
  .then(event => {
    console.log(`${event.description} was created`);
    return done(null, event);
  })
  .catch(done);
}

function createThirteenthRequest(event, done) {
  User.findOne({
    email: 'gautama@buddha.com'
  })
  .then(user => {
    const request = new Request({
      text: 'Whoop! Whoop!',
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

function createFourteenthRequest(event, done) {
  User.findOne({
    email: 'yayoi@kusama.com'
  })
  .then(user => {
    const request = new Request({
      text: 'Love it! Can\'t wait to join you.',
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

function createFifteenthRequest(event, done) {
  User.findOne({
    email: 'monica@belluci.com'
  })
  .then(user => {
    const request = new Request({
      text: 'I\'d love to try it!',
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

function pickFifthAttendee(event, done) {
  User.findOne({
    email: 'gautama@buddha.com'
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

function createSixthEvent(done){
  User.findOne({
    email: 'towkio@towkio.com'
  }).then(user => {
    const today = new Date();
    const event = new Event({
      address: 'Helmsley Pl, London E8 3SB',
      lat: '51.523928',
      lng: '-0.086171',
      name: 'Hot Pod Yoga',
      description: 'Let\'s go on a bender',
      cost: '£25',
      url: 'http://hotpodyoga.com/uk/',
      img: 'http://hotpodyoga.com/wp-content/uploads/2013/12/HotPodYoga-11.jpg',
      host: user._id,
      startTime: today.setDate(today.getDate() + 15),
      finishTime: today.setDate(today.getDate() + 16)
    });
    return event.save();
  })
  .then(event => {
    console.log(`${event.description} was created`);
    return done(null, event);
  })
  .catch(done);
}

function createSixteenthRequest(event, done) {
  User.findOne({
    email: 'monica@belluci.com'
  })
  .then(user => {
    const request = new Request({
      text: 'Mens sana in corpore sano',
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

function createSeventeenthRequest(event, done) {
  User.findOne({
    email: 'kerry@washington.com'
  })
  .then(user => {
    const request = new Request({
      text: 'Dreamy afternoon',
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

function createEighteenthRequest(event, done) {
  User.findOne({
    email: 'kaytranada@kaytranada.com'
  })
  .then(user => {
    const request = new Request({
      text: 'Not sure we mean the same think, but I am up for it!',
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

function pickSixthAttendee(event, done) {
  User.findOne({
    email: 'kaytranada@kaytranada.com'
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
