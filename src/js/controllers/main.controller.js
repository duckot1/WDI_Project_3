angular
  .module('clubMate')
  .controller('MainCtrl', MainCtrl);


MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;
  vm.logout = () => {
    console.log('logout');
    CurrentUserService.removeUser();
    $state.go('home');
  };
  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
  });
  $rootScope.$on('loggedOut', () => {
    vm.user = null;
  });
}
