(function() {
  'use strict';

  angular
    .module('bnails')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
