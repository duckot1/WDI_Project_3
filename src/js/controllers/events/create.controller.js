angular
.module('clubMate')
.controller('EventsCreateCtrl', EventsCreateCtrl);

EventsCreateCtrl.$inject = ['API', '$state', 'Event'];
function EventsCreateCtrl(API, $state, Event) {
  const vm = this;

  vm.create = eventsCreate;

  function eventsCreate(){
    return Event
      .save({ event: vm.event })
      .$promise
      .then(() => {
        console.log(vm.event);
        $state.go('eventsIndex');
        // { id: event._id });
      });
  }
}
