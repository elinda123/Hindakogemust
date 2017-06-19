(function() {
    'use strict';

    angular
        .module('hindakogemustApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('feedback-add', {
            parent: 'place',
            url: '/{id}/add',
            data: {
                authorities: []
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/feedback/feedback-dialog.html',
                    controller: 'FeedbackDialogController',
                    controllerAs: 'vm',
                    windowClass: 'modal-window',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                name: null,
                                comment: null,
                                rating: null,
                                id: null,
                                place: {
                                    id: $stateParams.id
                                }
                            };
                        }
                    }
                }).result.then(function () {
                    $state.go('^', null, {reload: true});
                }, function () {
                    $state.go('^');
                });
            }]
        });
    }

})();
