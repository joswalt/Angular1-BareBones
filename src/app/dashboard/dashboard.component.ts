namespace app.dashboard {
    'use strict';

    interface IDashboardVm {
        title: string
    }

    class DashboardController implements IDashboardVm {
        title: string;

        static $inject: Array<string> = ['logger', 'config'];
        constructor(private _logger: blocks.logger.ILogger,
            private _config: app.core.IAppConfig) {
        }

        $onInit = function () {
            this.title = this._config.appTitle;
            this._logger.info('Dashboard Component loaded.');
        }
    }

    angular.module('app.dashboard')
        .component('appDashboard', {
            templateUrl: './app/dashboard/dashboard.html',
            controller: DashboardController
        });
}