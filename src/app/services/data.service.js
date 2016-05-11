var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var DataService = (function () {
            function DataService($q) {
                var _this = this;
                this.$q = $q;
                this.getData = function () { return _this.$q.when(_this.mockData); };
                this.mockData = [
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
            }
            DataService.$inject = ['$q'];
            return DataService;
        }());
        services.DataService = DataService;
        angular
            .module('app.services')
            .service('dataService', DataService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=data.service.js.map