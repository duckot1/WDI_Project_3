angular
.module('clubMate')
.controller('UsersEventsCtrl', UsersEventsCtrl);

UsersEventsCtrl.$inject = ['User', '$stateParams'];
function UsersEventsCtrl(User, $stateParams) {
  const vm  = this;
  vm.title = 'My Events';
  User
    .get($stateParams).$promise
    .then(response => {
      vm.events = response.events;
      console.log(vm.events);
    });
}
