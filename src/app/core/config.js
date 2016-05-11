var app;
(function (app) {
    var core;
    (function (core) {
        'use strict';
        var config = {
            appTitle: 'Angular 1.X Bare Bones Starter',
            appErrorPrefix: '[A1X Error] '
        };
        angular.module('app.core')
            .config(configure)
            .value('config', config);
        configure.$inject = ['$logProvider', 'exceptionHandlerProvider'];
        function configure($logProvider, exceptionHandlerProvider) {
            if ($logProvider.debugEnabled) {
                $logProvider.debugEnabled(true);
            }
            exceptionHandlerProvider.configure(config.appErrorPrefix);
        }
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=config.js.map