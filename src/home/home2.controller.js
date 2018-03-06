function HomeController ($log){
  // constructor(){
  //console.log('hello');
  // }
  $log.log('yo');
}

HomeController.$inject = ['$log'];

export default HomeController;
