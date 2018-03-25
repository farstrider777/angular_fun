import templateOne from '../templates/templateOne.js';
import homeComponent from './home';
//import $ from 'jQuery';

function HomeController ($log, $scope, $document){
  // constructor(){
  //console.log('hello');
  // }
  $scope.lists = [];

  //let template = templateOne;
  //let hc = homeComponent;

  $scope.makeNewList = function () {
    //$log.log(angular.element('<list></list>'));
    //angular.element(document).find(".title");
    //$log.log($document.find('.title'));
    $log.log(templateOne);
    $log.log(homeComponent);
    //$scope.lists.push(templateOne);

    $log.log($document[0]);
    $log.log($document[0].getElementById('hypno'));
    $log.log('-----------------');
    $document[0].getElementById('hypno').innerHTML = 'whooooo';
    $document[0].getElementById('hypno').append('things <div> things on next line </div>');
    //let node = $document[0].getElementById('hypno').lastChild;
    let div = $document[0].createElement('div');
    //$log.log(node);
////////////////////////
    var t = $document[0].createTextNode('my first list');
    $log.log(t);

    $log.log(div);
    div.appendChild(t);
    //$document[0].getElementById('hypno').appendChild(node);
    $document[0].getElementById('hypno').appendChild(div);

  //  var node = document.createElement('LI');                 // Create a <li> node
//var textnode = document.createTextNode("Water");         // Create a text node
//node.appendChild(textnode);                              // Append the text to <li>
//document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
    //$('p').append('<b>Appended text</b>');
  };
}

HomeController.$inject = ['$log', '$scope', '$document'];

export default HomeController;
