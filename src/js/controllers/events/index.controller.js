angular
.module('clubMate')
.controller('EventsIndexCtrl', EventsIndexCtrl);

EventsIndexCtrl.$inject = ['Event'];
function EventsIndexCtrl(Event) {
  const vm  = this;
  Event
    .query().$promise
    .then(response => {
      vm.events = response;
    });
}
