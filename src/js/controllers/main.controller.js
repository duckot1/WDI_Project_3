angular
  .module('clubMate')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService'];
function MainCtrl($rootScope, CurrentUserService) {
  const vm = this;
  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
  });
  vm.logout = () => {
    $rootScope.$on('loggedOut');
    vm.user = null;
  };
}
