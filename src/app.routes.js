const appRoutes = ($stateProvider, $urlRouterProvider) => {
  $stateProvider.state({
      name: 'home',
      component: 'home',
      url: '/fudge'
  });
  $urlRouterProvider.otherwise('/');
};

export default appRoutes;
