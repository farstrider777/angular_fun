const appRoutes = ($stateProvider, $urlRouterProvider) => {
  $stateProvider.state({
      name: 'home',
      component: 'home',
      url: '/'
  });
  $urlRouterProvider.otherwise('/');
};

export default appRoutes;