(function() {
    'use strict';

    angular
        .module('hindakogemustApp')
        .controller('FeedbackController', FeedbackController);

    FeedbackController.$inject = ['DataUtils', 'Feedback', 'FeedbackSearch'];

    function FeedbackController(DataUtils, Feedback, FeedbackSearch) {

        var vm = this;

        vm.feedbacks = [];
        vm.openFile = DataUtils.openFile;
        vm.byteSize = DataUtils.byteSize;
        vm.clear = clear;
        vm.search = search;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {
            Feedback.query(function(result) {
                vm.feedbacks = result;
                vm.searchQuery = null;
            });
        }

        function search() {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            FeedbackSearch.query({query: vm.searchQuery}, function(result) {
                vm.feedbacks = result;
                vm.currentSearch = vm.searchQuery;
            });
        }

        function clear() {
            vm.searchQuery = null;
            loadAll();
        }    }
})();
