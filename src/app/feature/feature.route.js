(function() {
    'use strict';

    angular
        .module('app.feature')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'feature',
                config: {
                    url: '/feature/',
                    templateUrl: 'app/feature/feature.html',
                    controller: 'FeatureController',
                    controllerAs: 'vm',
                    title: 'feature',
                    settings: {
                        
                    }
                }
            }
        ];
    }
})();
