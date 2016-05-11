namespace app.feature {
    'use strict';
    
    angular
        .module('app.feature')
        .config(configureStates);

    configureStates.$inject = ['$stateProvider'];
    /* @ngInject */
    function configureStates($stateProvider: ng.ui.IStateProvider) {
        var states: any[] = getStates();
        states.forEach(function (state) {
            $stateProvider.state(state.state, state.config);
        });
    }

    function getStates(): any[] {
        return [
            {
                state: 'feature',
                config: {
                    url: '/feature/',
                    template: '<app-feature></app-feature>',
                    title: 'feature',
                    settings: {

                    }
                }
            }
        ];
    }
}
