angular
  .module('clubMate')
  .service('TokenService', TokenService);

TokenService.$inject = ['$window'];
function TokenService($window) {
  const self = this;

  self.setToken = (token) => {
    return $window.localStorage.setItem('Auth-token', token);
  };
}
