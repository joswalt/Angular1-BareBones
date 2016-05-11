var app;
(function (app) {
    var feature;
    (function (feature) {
        'use strict';
        var FeatureController = (function () {
            function FeatureController(_logger, _dataService) {
                this._logger = _logger;
                this._dataService = _dataService;
                this.$onInit = function () {
                    var _this = this;
                    return this._dataService.getData().then(function (results) {
                        _this.products = results;
                        _this._logger.info("Feature Component loaded.");
                        return _this.products;
                    });
                };
            }
            FeatureController.$inject = ['logger', 'dataService'];
            return FeatureController;
        }());
        angular.module('app.feature')
            .component('appFeature', {
            templateUrl: './app/feature/feature.html',
            controller: FeatureController
        });
    })(feature = app.feature || (app.feature = {}));
})(app || (app = {}));
//# sourceMappingURL=feature.component.js.map