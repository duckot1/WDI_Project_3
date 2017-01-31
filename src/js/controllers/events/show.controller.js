angular
  .module('clubMate')
  .controller('EventsShowCtrl', EventsShowCtrl);

EventsShowCtrl.$inject = ['API', '$stateParams', 'User', 'Event', '$state'];
function EventsShowCtrl(API, $stateParams, User, Event, $state) {
  const vm = this;
  vm.event = Event.get($stateParams);
  vm.delete = eventsDelete;

  function eventsDelete(event){
    console.log(event, 'eventDelete');
    Event
      .delete({ id: event._id })
      .$promise
      .then(() => {
        $state.go('eventsIndex');
      });
  }
}

//   function EventsShow() {
//     return $http
//       .get(`${API}/events/${$stateParams.id}`)
//       .then(response => {
//         vm.event = response.data;
//       });
//   }
//   vm.delete = function eventsDelete() {
//     return $http
//       .delete(`${API}/events/${$stateParams.id}`);
//   };
//   vm.interest = function(host) {
//     vm.request.receiver_id = host.event_host;
//     vm.request.sender_id = decoded.id;
//     vm.request.event_id = host._id;
//     User
//       .request(vm.request)
//       .$promise
//       .then(data => {
//         console.log(data);
//       });
//   };
// }
//
//
//   function EventsShow() {
//     return $http
//       .get(`${API}/events/${$stateParams.id}`)
//       .then(response => {
//         vm.event = response.data;
//         console.log(vm.event);
//       });
//   }
//   vm.delete = function eventsDelete() {
//     return $http
//       .delete(`${API}/events/${$stateParams.id}`);
//   };
//   vm.interest = function(host) {
//     // console.log(decoded);
//     vm.request.receiver_id = host.event_host;
//     vm.request.sender_id = decoded.id;
//     vm.request.event_id = host._id;
//     vm.request.text = 'I\'d like to go!';
//     User
//       .request(vm.request)
//       .$promise
//       .then(data => {
//         // console.log(data);
//       });
//   };
// }
