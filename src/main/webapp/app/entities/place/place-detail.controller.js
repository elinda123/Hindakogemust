(function() {
    'use strict';

    angular
        .module('hindakogemustApp')
        .controller('PlaceDetailController', PlaceDetailController);

    PlaceDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Place'];

    function PlaceDetailController($scope, $rootScope, $stateParams, previousState, entity, Place) {
        var vm = this;

        vm.place = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('hindakogemustApp:placeUpdate', function(event, result) {
            vm.place = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
