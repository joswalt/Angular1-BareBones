(function () {
    'use strict';

    angular
        .module('app.feature')
        .config(configureStates);
        
    configureStates.$inject = ['$stateProvider'];
    function configureStates($stateProvider) {
        var states = getStates();
        states.forEach(function (state) {
            $stateProvider.state(state.state, state.config);
        });
    }
    
    function getStates() {
        return [
            {
                state: 'feature',
                config: {
                    url: '/feature/',
                    template: '<app-feature></app-feature>',
                    title: 'feature',
                    settings: {}
                }
            }
        ];
    }
})();
