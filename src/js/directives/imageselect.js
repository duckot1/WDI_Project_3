angular
.module('clubMate')
.directive('imageSelector', imageSelector);

function imageSelector(){

//node, angular documentation and allows you to have a look at
  const reader = new FileReader();

//making an element and linking the template within the scope of the document
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="form-group"><label>Image</label><input base64="eventsCreate.event.base64" type="file" accept="image/*" ngf-select/></div>',
    link($scope, element){

      reader.onload = () => {
        $scope.eventsCreate.event.img = reader.result;
      };
//
      element.on('change', (e)=> {
        const file = e.target.files[0];
        // console.log(file);
        reader.readAsDataURL(file);
      });
    }
  };
}
