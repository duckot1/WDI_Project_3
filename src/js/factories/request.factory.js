angular
  .module('clubMate')
  .factory('Request', requestFactory);

requestFactory.$inject = ['API', '$resource'];
function requestFactory(API, $resource) {
  return $resource(`${API}/requests/:id`, { id: '@_id' }, {
    update: { method: 'PUT', url: `${API}/requests/:id`},
    register: { method: 'POST', url: `${API}/register`},
    login: { method: 'POST', url: `${API}/login`},
    request: { method: 'POST', url: `${API}/requests` },
    inbox: { method: 'GET', url: `${API}/requests/:id/inbox`, isArray: true },
    outbox: { method: 'GET', url: `${API}/requests/:id/outbox`, isArray: true }
  });
}
