(function () {
  'use strict';

  angular
    .module('bnails')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        views: {
          "header": {
            templateUrl: 'app/main/main.header.html'
          },
          "content": {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
