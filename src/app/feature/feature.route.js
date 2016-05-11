var app;
(function (app) {
    var feature;
    (function (feature) {
        'use strict';
        angular
            .module('app.feature')
            .config(configureStates);
        configureStates.$inject = ['$stateProvider'];
        /* @ngInject */
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
    })(feature = app.feature || (app.feature = {}));
})(app || (app = {}));
//# sourceMappingURL=feature.route.js.map