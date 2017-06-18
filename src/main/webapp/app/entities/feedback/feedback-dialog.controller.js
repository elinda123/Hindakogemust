(function() {
    'use strict';

    angular
        .module('hindakogemustApp')
        .controller('FeedbackDialogController', FeedbackDialogController);

    FeedbackDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils',
        'entity', 'Feedback', 'Place', 'FeedbackByPlace'];

    function FeedbackDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, Feedback,
                                       Place, FeedbackByPlace) {
        var vm = this;

        vm.feedback = entity;
        vm.clear = clear;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;
        vm.places = Place.query();
        vm.place = Place.get({id : entity.place.id});

        vm.feedbacks = FeedbackByPlace.get({id : entity.place.id});

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.feedback.id !== null) {
                Feedback.update(vm.feedback, onSaveSuccess, onSaveError);
            } else {
                Feedback.save(vm.feedback, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('hindakogemustApp:feedbackUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
