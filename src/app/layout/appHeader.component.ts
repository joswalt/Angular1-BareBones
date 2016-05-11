namespace app.layout {
    'use strict';
    
    interface IAppHeaderVm {
        title: string
    }
    
    class AppLayoutController implements IAppHeaderVm {
        title: string;
        
        static $inject: Array<string> = ['logger', 'config'];
        constructor(private _logger: blocks.logger.ILogger,
            private _config: app.core.IAppConfig) {
        }
        
        $onInit = function() {
            this.title = this._config.appTitle;
            this._logger.info('App Header Component loaded.');
        }
    }
    
    angular.module('app.layout')
        .component('appHeader', {
            templateUrl: './app/layout/appHeader.component.html',
            controller: AppLayoutController
        });
}
