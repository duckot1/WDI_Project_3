angular
  .module('clubMate')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
<<<<<<< HEAD
      template: '<h1>Home</h1>'
=======
      templateUrl: '/js/views/home.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/js/views/register.html',
      controller: 'UserRegisterCtrl',
      controllerAs: 'register'
>>>>>>> 6ddf7d30a73a76231d6939a1d6947365e4b9c26d
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
      controllerAs: 'eventsIndex'
    });

  $urlRouterProvider.otherwise('/');

}
