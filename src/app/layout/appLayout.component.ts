namespace app.layout {
    'use strict';
    
    interface IAppComponentVm {
        title: string
    }
    
    class AppLayoutController implements IAppComponentVm {
        title: string;
        
        static $inject: Array<string> = ['logger', 'config'];
        constructor(private _logger: blocks.logger.ILogger,
            private _config: app.core.IAppConfig) {
        }
        
        $onInit = function() {
            this.title = this._config.appTitle;
            this._logger.info('App Component loaded.');
        }
    }
    
    angular.module('app.layout')
        .component('appLayout', {
            templateUrl: './app/layout/appLayout.component.html',
            controller: AppLayoutController
        });
}
