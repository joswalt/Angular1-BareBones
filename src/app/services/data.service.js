(function() {
'use strict';

    angular
        .module('app.services')
        .factory('dataService', DataService);

    DataService.$inject = ['$q'];
    function DataService($q) {
        var mockData = [
            {
                productNumber: 3353,
                productPrice: 64.26,
                productName: 'Test Product 1'
            },
            {
                productNumber: 5262,
                productPrice: 43.89,
                productName: 'Test Product 2'
            },
            {
                productNumber: 4575,
                productPrice: 25.75,
                productName: 'Test Product 3'
            }
        ];
        
        var service = {
            getData:getData
        };
        
        return service;

        ////////////////
        function getData() {
            return $q.when(mockData);
        }
    }
})();