(function() {
  'use strict';

  angular
    .module('bnails')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr) {
      var vm = this;

      this.topDirections = ['left', 'up'];
      this.bottomDirections = ['down', 'right'];
      this.isOpen = false;
      this.availableModes = ['md-fling', 'md-scale'];
      this.selectedMode = 'md-fling';
      this.availableDirections = ['up', 'down', 'left', 'right'];
      this.selectedDirection = 'up';
  }
})();
