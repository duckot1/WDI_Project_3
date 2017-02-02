angular
.module('clubMate')
.controller('EventsCreateCtrl', EventsCreateCtrl);

EventsCreateCtrl.$inject = ['API', '$state', 'Event'];
function EventsCreateCtrl(API, $state, Event) {
  const vm = this;

  vm.event = {};

  vm.create = eventsCreate;

  function eventsCreate(){
    return Event
    .save({event: vm.event})
    .$promise
    .then((response) => {
      console.log(response._id);
      $state.go('eventsShow', {id: response._id});
    });
  }
}
