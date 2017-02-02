angular
.module('clubMate')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'home'
  })
  .state('eventsIndex', {
    url: '/events',
    templateUrl: '/js/views/events/index.html',
    controller: 'EventsIndexCtrl',
    controllerAs: 'events'
  })
  .state('eventsCreate', {
    url: '/events/new',
    templateUrl: '/js/views/events/new.html',
    controller: 'EventsCreateCtrl',
    controllerAs: 'eventsCreate'
  })
  .state('eventsShow', {
    url: '/events/:id',
    templateUrl: '/js/views/events/show.html',
    controller: 'EventsShowCtrl',
    controllerAs: 'eventsShow'
  })
  .state('eventsEdit', {
    url: '/events/:id/edit',
    templateUrl: '/js/views/events/edit.html',
    controller: 'EventsEditCtrl',
    controllerAs: 'eventsEdit'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl',
    controllerAs: 'usersShow'
  })
  .state('usersEvents', {
    url: '/users/:id/events',
    templateUrl: '/js/views/events/eventsList.html',
    controller: 'UsersEventsCtrl',
    controllerAs: 'events'
  })
  .state('usersInterested', {
    url: '/users/:id/interested',
    templateUrl: '/js/views/events/eventsList.html',
    controller: 'UsersInterestedCtrl',
    controllerAs: 'events'
  })
  .state('usersEdit', {
    url: '/users/:id/edit',
    templateUrl: '/js/views/users/edit.html',
    controller: 'UsersEditCtrl',
    controllerAs: 'usersEdit'
  })
  .state('usersRequests', {
    url: '/users/:id/requests',
    templateUrl: '/js/views/users/requests.html',
    controller: 'UsersRequestsCtrl',
    controllerAs: 'usersRequests'
  });

  $urlRouterProvider.otherwise('/');
}
