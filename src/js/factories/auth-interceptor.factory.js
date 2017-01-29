angular
  .module('clubMate')
  .factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = [];

function AuthInterceptor() {
  return{
    request: function(config) {
      return config;
    },
    response: function(res) {
      return res;
    }
  };
}
