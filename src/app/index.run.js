(function () {
  'use strict';

  angular
    .module('bnails')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $window) {

    $window.fbAsyncInit = function () {
      // Executed when the SDK is loaded
      FB.init({
        appId: '812782195502403',
        status: true,
        cookie: true,
        xfbml: true,
        version: 'v2.3'
      });
    };

    (function (d) {
      // load the Facebook javascript SDK
      var js,
        id = 'facebook-jssdk',
        ref = d.getElementsByTagName('script')[0];

      if (d.getElementById(id)) {
        return;
      }

      js = d.createElement('script');
      js.id = id;
      js.async = true;
      js.src = "//connect.facebook.net/en_US/sdk.js";

      ref.parentNode.insertBefore(js, ref);

    }(document));

    $log.debug('runBlock end');
  }

})();
