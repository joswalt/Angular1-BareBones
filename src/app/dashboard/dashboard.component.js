var app;
(function (app) {
    var dashboard;
    (function (dashboard) {
        'use strict';
        var DashboardController = (function () {
            function DashboardController(_logger, _config) {
                this._logger = _logger;
                this._config = _config;
                this.$onInit = function () {
                    this.title = this._config.appTitle;
                    this._logger.info('Dashboard Component loaded.');
                };
            }
            DashboardController.$inject = ['logger', 'config'];
            return DashboardController;
        }());
        angular.module('app.dashboard')
            .component('appDashboard', {
            templateUrl: './app/dashboard/dashboard.html',
            controller: DashboardController
        });
    })(dashboard = app.dashboard || (app.dashboard = {}));
})(app || (app = {}));
//# sourceMappingURL=dashboard.component.js.map