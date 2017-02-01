angular
  .module('clubMate')
  .controller('EventsShowCtrl', EventsShowCtrl);

EventsShowCtrl.$inject = ['API', '$stateParams', 'User', 'Event', '$state', 'TokenService'];
function EventsShowCtrl(API, $stateParams, User, Event, $state, TokenService) {
  const vm = this;

  vm.event = Event.get($stateParams);
  vm.delete = eventsDelete;
  vm.interested = sendInterested;
  vm.notInterested = sendNotInterested;
console.log('eventShow', vm.event)

  function eventsDelete(event){
    Event
      .delete({ id: event._id })
      .$promise
      .then(() => {
        $state.go('eventsIndex');
      });
  }

  function sendInterested(event) {
    User
      .request({
        receiver: event.host._id,
        event: event._id,
        interested: true,
        text: 'Hi there I would like to join you'
      })
      .$promise
      .then(response => {
        $state.go('eventsIndex');
      });
  }

  const decoded = TokenService.decodeToken();

  function sendNotInterested(event) {
    User
      .get({ id: decoded.id })
      .$promise
      .then((user) => {
        user.notInterestedIn.push(event._id);
        User
          .update({ id: decoded.id }, user)
          .$promise
          .then(data => {
            $state.go('eventsIndex');
          });
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
