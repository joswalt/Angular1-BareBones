(function() {
    'use strict';

    angular
        .module('app.layout')
        .component('appLayout', {
            templateUrl: './app/layout/layout.html',
            controller: AppLayoutController
        });

    AppLayoutController.$inject = ['logger', 'config'];;
    function AppLayoutController (logger, config) {
        var vm = this;
        
        vm.$onInit = function() {
            vm.title = config.appTitle;
            logger.info("App Layout Component loaded.");
        }
    }
})();