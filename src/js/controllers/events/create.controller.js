angular
.module('clubMate')
.controller('EventsCreateCtrl', EventsCreateCtrl);

EventsCreateCtrl.$inject = ['API', '$state', 'Event', 'User', '$stateParams', 'CurrentUserService'];
function EventsCreateCtrl(API, $state, Event, User, $stateParams, CurrentUserService) {
  const vm = this;

  vm.event = {};

  CurrentUserService.getUser();
  const eventsArray = CurrentUserService.currentUser.events;

  if (eventsArray.length > 0){
    eventsArray.forEach(function(event){
      vm.activeEventCheck = true;
      vm.activeEventCheckMessage = false;
      console.log(event.active);
      if (event.active === true){
        vm.activeEventCheck = false;
        vm.activeEventCheckMessage = true;
      }
    });
  }else{
    vm.activeEventCheck = true;
    vm.activeEventCheckMessage = false;
  }


  vm.create           = eventsCreate;


  function eventsCreate(){
    console.log(vm.event);
    // vm.event.img = "http://fillmurray.com/200/200";
    return Event
    .save({event: vm.event})
    .$promise
    .then((response) => {
      console.log(response._id);
      $state.go('eventsShow', {id: response._id});
    });
  }
}
