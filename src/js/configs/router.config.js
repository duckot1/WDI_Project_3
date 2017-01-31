angular
.module('clubMate')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider

  .state('home', {
    url: '/',
    views: {
      view1: {
        templateUrl: '/js/views/login.html',
        controller: 'UserLoginCtrl',
        controllerAs: 'login'
      },
      view2: {
        templateUrl: '/js/views/register.html',
        controller: 'UserRegisterCtrl',
        controllerAs: 'register'
      }
    }
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'UserRegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'UserLoginCtrl',
    controllerAs: 'login'
  })
  .state('logout', {
    url: '/',
    templateUrl: '<h1>Home</h1>',
    controller: 'MainCtrl',
    controllerAs: 'logout'
  })
  .state('eventsIndex', {
    url: '/events',
    templateUrl: '/js/views/events/index.html',
    controller: 'EventsIndexCtrl',
    controllerAs: 'events'
  })
  .state('eventsCreate', {
    url: '/events/new',
    templateUrl: '/js/views/events/create.html',
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
  .state('usersEdit', {
    url: '/users/:id/edit',
    templateUrl: '/js/views/users/edit.html',
    controller: 'UsersEditCtrl',
    controllerAs: 'usersEdit'
  });


  $urlRouterProvider.otherwise('/');

}
