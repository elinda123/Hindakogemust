(function() {
    'use strict';

    angular
        .module('hindakogemustApp')
        .controller('PlaceDialogController', PlaceDialogController);

    PlaceDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Place'];

    function PlaceDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Place) {
        var vm = this;

        vm.place = entity;
        vm.clear = clear;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.place.id !== null) {
                Place.update(vm.place, onSaveSuccess, onSaveError);
            } else {
                Place.save(vm.place, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('hindakogemustApp:placeUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
