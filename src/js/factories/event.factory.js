angular
  .module('clubMate')
  .factory('Event', eventFactory);

eventFactory.$inject = ['API', '$resource'];
function eventFactory(API, $resource) {
  return $resource(`${API}/events/:id`, { id: '@_id' }, {
    update: { method: 'PUT', url: `${API}/events/:id`},
    new: { method: 'POST', url: `${API}/events`}
  });
}
