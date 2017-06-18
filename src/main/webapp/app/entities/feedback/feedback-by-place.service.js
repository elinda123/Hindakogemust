(function() {
    'use strict';
    angular
        .module('hindakogemustApp')
        .factory('FeedbackByPlace', FeedbackByPlace);

    FeedbackByPlace.$inject = ['$resource'];

    function FeedbackByPlace ($resource, placeId) {
        var resourceUrl =  'api/place/:id/feedback';

        return $resource(resourceUrl, {}, {
            'get': { method: 'GET', isArray: true}
        });
    }
})();
