namespace app.core {
    'use strict';
    
    export interface IAppConfig {
        appTitle: string;
        appErrorPrefix: string;
    }

    var config: IAppConfig = {
        appTitle: 'Angular 1.X Bare Bones Starter',
        appErrorPrefix: '[A1X Error] '
    };

    angular.module('app.core')
        .config(configure)
        .value('config', config);

    configure.$inject = ['$logProvider', 'exceptionHandlerProvider'];
    function configure($logProvider: ng.ILogProvider,
        exceptionHandlerProvider: blocks.exception.ExceptionHandlerProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
    }
}