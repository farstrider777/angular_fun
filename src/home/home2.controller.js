function HomeController ($log, $scope, $document){
  // constructor(){
  //console.log('hello');
  // }
  $scope.makeNewList = function () {
    $log.log(angular.element('<list></list>'));
    //angular.element(document).find(".title");
    $log.log($document.find('.title'));
  };
}

HomeController.$inject = ['$log', '$scope', '$document'];

export default HomeController;
