(function() {
    'use strict';
    angular
        .module('hindakogemustApp')
        .factory('Place', Place);

    Place.$inject = ['$resource'];

    function Place ($resource, searchQuery) {
        var resourceUrl =  'api/places/:id';

        return $resource(resourceUrl, searchQuery, {
            'query': { method: 'GET', params: searchQuery, isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
