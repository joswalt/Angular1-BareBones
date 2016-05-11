(function () {
    'use strict';

    angular
        .module('blocks.router')
        .service('RouterHelper', RouterHelper);

    RouterHelper.$inject = ['$location', '$rootScope', '$state', 'logger'];
    function RouterHelper($location, $rootScope, $state, logger) {
        this.$location = $location;
        this.$rootScope = $rootScope;
        this.$state = $state;
        this.logger = logger;
        this.stateCounts = { errors: 0, changes: 0 };
        this.handlingStateChangeError = false;
        this.handleRoutingErrors();
        this.handleStateChanges();
    }

    RouterHelper.prototype.handleRoutingErrors = function () {
        var self = this;
        //TODO: must inject $state so we can kick off routing
        // Route cancellation:
        // On routing error, go to the dashboard.
        // Provide an exit clause if it tries to do it twice.
        this.$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            if (self.handlingStateChangeError) {
                return;
            }
            self.stateCounts.errors++;
            self.handlingStateChangeError = true;
            var destination = (toState &&
                (toState.title || toState.name || toState.loadedTemplateUrl)) ||
                'unknown target';
            var msg = 'Error routing to ' + destination + '. ' +
                (error.data || '') + '. <br/>' + (error.statusText || '') +
                ': ' + (error.status || '');
            self.logger.warning(msg, [toState]);
            self.$location.path('/');
        });
    };
    RouterHelper.prototype.handleStateChanges = function () {
        var self = this;
        this.$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, error) {
            self.stateCounts.changes++;
            self.handlingStateChangeError = false;
            //var title = config.docTitle + ' ' + (toState.title || '');
            var title = (toState.title || '');
            self.$rootScope.title = title; // data bind to <title>
        });
    };
})();