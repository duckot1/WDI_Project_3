angular
.module('clubMate')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      template: '<h1>Home</h1>',
      templateUrl: '/js/views/home.html'
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
    .state('eventsEdit', {
      url: '/events/:id/edit',
      templateUrl: '/js/views/events/edit.html',
      controller: 'EventsEditCtrl',
      controllerAs: 'eventsEdit'
    })
    .state('eventsShow', {
      url: '/events/:id',
      templateUrl: '/js/views/events/show.html',
      controller: 'EventsShowCtrl',
      controllerAs: 'eventsShow'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: '/js/views/users/edit.html',
      controller: 'UsersEditCtrl',
      controllerAs: 'usersEdit'
    });

  $urlRouterProvider.otherwise('/');

}
