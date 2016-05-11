var app;
(function (app) {
    var layout;
    (function (layout) {
        'use strict';
        var AppLayoutController = (function () {
            function AppLayoutController(_logger, _config) {
                this._logger = _logger;
                this._config = _config;
                this.$onInit = function () {
                    this.title = this._config.appTitle;
                    this._logger.info('App Component loaded.');
                };
            }
            AppLayoutController.$inject = ['logger', 'config'];
            return AppLayoutController;
        }());
        angular.module('app.layout')
            .component('appLayout', {
            templateUrl: './app/layout/appLayout.component.html',
            controller: AppLayoutController
        });
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));
//# sourceMappingURL=appLayout.component.js.map