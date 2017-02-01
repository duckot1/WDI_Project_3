angular
  .module('clubMate')
  .factory('Event', eventFactory);

eventFactory.$inject = ['API', '$resource'];
function eventFactory(API, $resource) {
  return $resource(`${API}/events/:id`, { id: '@_id' }, {
    query: { method: 'GET', url: `${API}/events`, isArray: true },
    update: { method: 'PUT', url: `${API}/events/:id`},
    new: { method: 'POST', url: `${API}/events`},
    inbox: { method: 'GET', url: `${API}/requests/:id`, isArray: true }
  });
}
