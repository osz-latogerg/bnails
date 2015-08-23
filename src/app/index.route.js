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
      })
      .state('introduction', {
        url: '/bemutatkozas',
        views: {
          "header": {
            templateUrl: 'app/main/main.header.html'
          },
          "content": {
            templateUrl: 'app/components/introduction/introduction.html'
          }
        }
      })
      .state('nails', {
        url: '/korom',
        views: {
          "header": {
            templateUrl: 'app/main/main.header.html'
          },
          "content": {
            templateUrl: 'app/components/nails/nails.html'
          }
        }
      })
      .state('makeup', {
        url: '/smink',
        views: {
          "header": {
            templateUrl: 'app/main/main.header.html'
          },
          "content": {
            templateUrl: 'app/components/makeup/makeup.html'
          }
        }
      })
      .state('prices', {
        url: '/arak',
        views: {
          "header": {
            templateUrl: 'app/main/main.header.html'
          },
          "content": {
            templateUrl: 'app/components/prices/prices.html'
          }
        }
      })
      .state('contact', {
        url: '/kapcsolat',
        views: {
          "header": {
            templateUrl: 'app/main/main.header.html'
          },
          "content": {
            templateUrl: 'app/components/contact/contact.html'
          }
        }
      })
      .state('news', {
        url: '/ujdonsag',
        views: {
          "header": {
            templateUrl: 'app/main/main.header.html'
          },
          "content": {
            templateUrl: 'app/components/news/news.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
