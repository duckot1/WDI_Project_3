angular
.module('clubMate')
.controller('EventsIndexCtrl', EventsIndexCtrl);

EventsIndexCtrl.$inject = ['$http', 'API', 'Event'];
function EventsIndexCtrl($http, API, Event){
  const vm = this;
  // vm.swipeRight = function($event) {
  //   console.log('Right', $event);
  // };
  // vm.swipeLeft = function($event) {
  //   console.log('Left', $event);
  // };


  Event
  .query()
  .$promise
  .then(response => {
    vm.events = response;
    console.log('hi', vm.events);
  });
}
