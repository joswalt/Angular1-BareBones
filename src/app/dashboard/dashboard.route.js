(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'dashboard',
                config: {
                    url: '/',
                    template: '<app-dashboard></app-dashboard>',
                    title: 'dashboard',
                    settings: {
                        
                    }
                }
            }
        ];
    }
})();
