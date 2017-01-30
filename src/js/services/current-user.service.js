angular
.module('clubMate')
.service('CurrentUserService', CurrentUserService);

CurrentUserService.$inject = ['TokenService', 'User', '$rootScope'];
function CurrentUserService(TokenService, User, $rootScope) {
  const self = this;

  self.getUser = () => {
    const decoded = TokenService.decodeToken();
    console.log('decoded id', decoded.id);
    if (decoded) {
      User
      .get({ id: decoded.id })
      .$promise
      .then(data => {
        self.currentUser = data;
        console.log(self.currentUser);
        $rootScope.$broadcast('loggedIn');
      }, err => {
        console.log(err);
        console.log('decoded', decoded.id);
      });
      self.removeUser = () => {
        self.currentUser = null;
        TokenService.removeToken();
        $rootScope.$broadcast('loggedOut');
      };
    }
  };
  self.getUser();

}
