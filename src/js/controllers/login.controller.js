angular
  .module('clubMate')
  .controller('UserLoginCtrl', UserLoginCtrl);

UserLoginCtrl.$inject = ['User'];
function UserLoginCtrl(User) {
  const vm =this;

  vm.login = () => {
    User
    .login(vm.user)
    .$promise
    .then(data => {
      console.log(data);
    }), err => {
      console.log(err);
    };
  };
}
