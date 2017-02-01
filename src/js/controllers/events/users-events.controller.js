angular
.module('clubMate')
.controller('UsersEventsCtrl', UsersEventsCtrl);

UsersEventsCtrl.$inject = ['User', '$stateParams'];
function UsersEventsCtrl(User, $stateParams) {
  const vm  = this;

  User
    .get($stateParams).$promise
    .then(response => {
      vm.events = response.events;
    });
}
