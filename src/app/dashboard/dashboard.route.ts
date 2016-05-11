namespace app.dashboard {
    'use strict';

    angular
        .module('app.dashboard')
        .config(configureStates);

    configureStates.$inject = ['$stateProvider'];
    function configureStates($stateProvider: ng.ui.IStateProvider) {
        var states = getStates();
        states.forEach(function (state) {
            $stateProvider.state(state.state, state.config);
        });
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
}

