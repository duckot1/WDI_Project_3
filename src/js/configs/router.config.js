angular
  .module('clubMate')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/js/view/register.html',
      controller: 'UserRegisterCtrl',
      controllerAs: 'register'
    })
    .state('eventsIndex', {
      url: '/events',
      templateUrl: '/js/views/events/index.html',
      controller: 'EventsIndexCtrl',
      controllerAs: 'eventsIndex'
    });

  $urlRouterProvider.otherwise('/');

}
