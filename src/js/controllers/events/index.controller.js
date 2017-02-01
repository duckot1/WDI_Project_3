angular
.module('clubMate')
.controller('EventsIndexCtrl', EventsIndexCtrl);

EventsIndexCtrl.$inject = ['Event', '$stateParams', 'CurrentUserService'];
function EventsIndexCtrl(Event, $stateParams, CurrentUserService){
  const vm            = this;
  vm.user             = CurrentUserService.getUser();
  vm.swipedLeft       = swipedLeft;
  vm.swipedRight      = swipedRight;
  vm.submitMessage    = submitMessage;

  Event
  .query($stateParams)
  .$promise
  .then(response => {
    vm.events = response;
  });

  function swipedLeft(event) {
    event.animation  = 'slideOutLeft';
  }

  function swipedRight(event) {
    event.animation  = 'slideOutRight';
    vm.event = event;
    $('#eventModal').modal('show');
  }

  function submitMessage(){
    Request.save({
      event: vm.event._id,
      messages: [{
        body: vm.message.body
      }]
    })
    .$promise
    .then(data => {
      $('#eventModal').modal('hide');
    })
    .catch(console.log);
  }

}
