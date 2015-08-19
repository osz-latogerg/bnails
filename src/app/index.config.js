(function() {
  'use strict';

  angular
    .module('bnails')
    .config(iconsConfig)
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr) {
    // Enable log
    $logProvider.debugEnabled(false);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
  }

  function iconsConfig($mdIconProvider) {
    $mdIconProvider
      .iconSet('svg', '/assets/svg/svg.svg', 24)
      .iconSet('icons', '/assets/svg/icons.svg', 24)
      .defaultIconSet('/assets/svg/icons.svg', 24);
  }
})();
