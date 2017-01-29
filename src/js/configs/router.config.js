angular
  .module('clubMate')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      template: '<h1>Home</h1>'
    })
    .state('eventsIndex', {
      url: '/events',
      templateUrl: '/js/views/events/index.html',
      controller: 'EventsIndexCtrl',
      controllerAs: 'eventsIndex'
    });

  $urlRouterProvider.otherwise('/');

}
