var app;
(function (app) {
    var dashboard;
    (function (dashboard) {
        'use strict';
        angular
            .module('app.dashboard')
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
                    state: 'dashboard',
                    config: {
                        url: '/',
                        template: '<app-dashboard></app-dashboard>',
                        title: 'dashboard',
                        settings: {}
                    }
                }
            ];
        }
    })(dashboard = app.dashboard || (app.dashboard = {}));
})(app || (app = {}));
//# sourceMappingURL=dashboard.route.js.map