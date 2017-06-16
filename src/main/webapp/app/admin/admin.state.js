(function () {
    'use strict';

    angular
        .module('hindakogemustApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('admin2', {
            abstract: true,
            parent: 'app'
        });
    }
})();
