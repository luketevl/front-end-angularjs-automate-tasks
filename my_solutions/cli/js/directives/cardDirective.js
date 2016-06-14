(function(){
  'use strict';

  // Searching module
  angular.module('app').directive('uiCard', uiCard);

  // Creating the directive
  function uiCard(){
    let directive = {
      restrict: 'EA',
      templateUrl: 'views/card.html',
      scope: {
        "ui-id":               '@',
        "ui-name":             '@',
        "ui-disclosableinfo":  '@'
      },
    };

    return directive;
  }
})();
