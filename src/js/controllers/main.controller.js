angular
  .module('clubMate')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$uibModal'];
function MainCtrl($uibModal) {
  const vm = this;

  vm.animationsEnabled = true;

  vm.register = function() {
    const registerModal = $uibModal.open({
      animation: vm.animationsEnabled,
      templateUrl: '/js/views/register.html',
      controller: 'UserRegisterCtrl',
      controllerAs: 'register'
    });

    registerModal.result.then(function() {
      console.log('CLOSED');
    }, function () {
      console.log('CLOSED');
    });
  };

  // vm.login = function(size, parentSelector) {
  //   var modalInstance = $uibModal.open({
  //     animation: MainCtrl.animationsEnabled,
  //     ariaLabelledBy: 'modal-title',
  //     ariaDescribedBy: 'modal-body',
  //     templateUrl: '/js/views/login.html',
  //     controller: 'UserLoginCtrl',
  //     controllerAs: 'login',
  //     size: size
  //   });
  // };
}
