angular
  .module('clubMate')
  .controller('EventsIndexCtrl', EventsIndexCtrl);

EventsIndexCtrl.$inject = [];
function EventsIndexCtrl(){
  const vm = this;

  vm.name = 'Sarah';
}
