(function() {
    'use strict';

    angular
        .module('app.layout')
        .component('appHeader', {
            templateUrl: './app/layout/header.html',
            controller: AppHeaderController
        });

    AppHeaderController.$inject = ['logger', 'config'];;
    function AppHeaderController (logger, config) {
        var vm = this;
        
        vm.$onInit = function() {
            vm.title = config.appTitle;
            logger.info("App Header Component loaded.");
        }
    }
})();