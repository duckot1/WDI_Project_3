angular
  .module('clubMate')
  .factory('User', userFactory);

userFactory.$inject = ['API', '$resource'];
function userFactory(API, $resource) {
  return $resource(`${API}/users/:id`, { id: '@_id' }, {
    update: { method: 'PUT', url: `${API}/users/:id`},
    register: { method: 'POST', url: `${API}/register`},
    login: { method: 'POST', url: `${API}/login`},
    request: { method: 'POST', url: `${API}/requests` }
  });
}
