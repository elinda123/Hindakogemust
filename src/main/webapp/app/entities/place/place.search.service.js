(function() {
    'use strict';

    angular
        .module('hindakogemustApp')
        .factory('PlaceSearch', PlaceSearch);

    PlaceSearch.$inject = ['$resource'];

    function PlaceSearch($resource) {
        var resourceUrl =  'api/_search/places/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
