angular
.module('clubMate')
.controller('UsersEventsCtrl', UsersEventsCtrl);

UsersEventsCtrl.$inject = ['User', '$stateParams'];
function UsersEventsCtrl(User, $stateParams) {
  const vm  = this;
  vm.title = 'My Events';
  vm.eventsAttending = [];
  vm.events;
  vm.noEvents = true;
  vm.checkAttending = false;
  vm.checkHosting = false;
  User
  .get($stateParams).$promise
  .then(response => {
    vm.events = response.events;
    if (vm.events.length === 0) {
      vm.checkHosting = true;
    } else {
      vm.noEvents = false;
    }
  });

  User.inbox($stateParams).$promise
  .then(data => {
    vm.messages = data;
    if (vm.eventsAttending.length === 0) {
      vm.checkAttending = true;
    } else {
      vm.noEvents = false;
    }
    for (var i = 0; i < vm.messages.length; i++) {
      if (vm.messages[i].status === 'accepted') {
        console.log(vm.eventsAttending, vm.messages[i]);
        vm.eventsAttending.push(vm.messages[i]);
      }
    }
  });






}
