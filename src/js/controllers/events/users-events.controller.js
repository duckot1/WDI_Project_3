angular
.module('clubMate')
.controller('UsersEventsCtrl', UsersEventsCtrl);

UsersEventsCtrl.$inject = ['User', '$stateParams'];
function UsersEventsCtrl(User, $stateParams) {
  const vm  = this;
  vm.title = 'My Events';
  vm.requestsAccepted = [];
  vm.eventAttending;
  vm.events;
  vm.noEvents = true;
  vm.checkAttending = false;
  vm.checkHosting = false;
  User
  .get($stateParams).$promise
  .then(response => {
    vm.events = response.events;
    console.log(vm.events.length);
    if (vm.events.length === 0) {
      vm.checkHosting = true;
      vm.checkAttending = true;
    } else {
      vm.noEvents = false;
      vm.checkAttending = false;
      vm.checkHosting = false;
    }
  });

  User.outbox($stateParams).$promise
  .then(data => {
    console.log(data);
    vm.requests = data;
    if (vm.requests.length === 0) {
      vm.checkAttending = false;
    } else {
      vm.noEvents = false;
    }
    for (var i = 0; i < vm.requests.length; i++) {
      if (vm.requests[i].status === 'accepted') {
        vm.requestsAccepted.push(vm.requests[i]);
      }
    }
    console.log(vm.requestsAccepted);
  });






}
