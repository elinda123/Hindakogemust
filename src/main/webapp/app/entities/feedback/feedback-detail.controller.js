(function() {
    'use strict';

    angular
        .module('hindakogemustApp')
        .controller('FeedbackDetailController', FeedbackDetailController);

    FeedbackDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'DataUtils', 'entity', 'Feedback', 'Place'];

    function FeedbackDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, Feedback, Place) {
        var vm = this;

        vm.feedback = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('hindakogemustApp:feedbackUpdate', function(event, result) {
            vm.feedback = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
