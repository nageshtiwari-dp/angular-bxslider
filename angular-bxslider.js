/*!
 * angular-masonry 0.1.3
 * Nageshwar Tiwari http://www.docplexus.in
 */
 (function() {
  "use strict";

  angular.module('angular-bxslider', []).directive('dpBxslider', ["$timeout", "$rootScope", function($timeout, $rootScope) {
      return {
        restrict: 'A',
        link: function($scope, iElm, iAttrs, controller) {
          // console.log($scope.$eval('{' + iAttrs.uixBxslider + '}'));
          $scope.$on('repeatFinished', function () {
            // console.log("ngRepeat has finished");
            iElm.bxSlider($scope.$eval('{' + iAttrs.dpBxslider + '}'));
          });
        }
      }
  }])
  .directive('notifyWhenRepeatFinished', ['$timeout',
    function ($timeout) {
      return {
        restrict: 'A',
        link: function ($scope, iElm, iAttrs) {
          if ($scope.$last === true) {
            $timeout(function () {
              $scope.$emit('repeatFinished');
            });
          }
        }
      }
    }
  ]);
})();
