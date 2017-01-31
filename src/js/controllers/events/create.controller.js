angular
  .module('clubMate')
  .controller('EventsCreateCtrl', EventsCreateCtrl);

EventsCreateCtrl.$inject = ['Event'];
function EventsCreateCtrl(Event) {
  const vm = this;
  vm.new = () => {
    Event
    console.log(vm.event, 'vm.event')
    .new(vm.event)
    .$promise
    .then(() => {
      console.log('event added');
    }, err => {
      console.log(err);
    });
  };
}
