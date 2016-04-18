(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .component('appDashboard', {
            templateUrl: './app/dashboard/dashboard.html',
            controller: DashboardController
        });

    DashboardController.$inject = ['logger', 'config'];;
    function DashboardController (logger, config) {
        var vm = this;
        
        vm.$onInit = function() {
            vm.title = config.appTitle;
            logger.info("Dashboard Component loaded.");
        }
    }
})();