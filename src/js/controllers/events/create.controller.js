angular
.module('clubMate')
.controller('EventsCreateCtrl', EventsCreateCtrl);

EventsCreateCtrl.$inject = ['API', '$state', 'Event'];
function EventsCreateCtrl(API, $state, Event) {
  const vm = this;
  vm.new = () => {
    Event
    .new(vm.event);

    vm.create = eventsCreate;

    function eventsCreate(){
      return Event
      .save({ event: vm.event })
      .$promise
      .then(event => {
        console.log(vm.event);
        $state.go('eventsShow', { id: event._id });
      });
    }
  };
}
