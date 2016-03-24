(function() {
    'use strict';

    var core = angular.module('app.core');
    
    var config = {
        appTitle: 'Angular 1.X Bare Bones Starter'
    };
    
    core.value('config', config);
    
    configure.$inject = ['routerHelperProvider'];
    function configure(routerHelperProvider) {
        configureStateHelper();
        
        function configureStateHelper() {
            routerHelperProvider.configure({
                docTitle: 'NG1X: '
            });
        }
    }
})();