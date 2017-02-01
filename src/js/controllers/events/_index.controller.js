angular
.module('clubMate')
.controller('EventsIndexCtrl', EventsIndexCtrl);

EventsIndexCtrl.$inject = ['Event', 'CurrentUserService'];
function EventsIndexCtrl(Event, CurrentUserService) {
  const vm  = this;
  vm.events = Event.query();
}
