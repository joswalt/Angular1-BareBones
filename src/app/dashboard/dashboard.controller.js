(function() {
'use strict';

    angular
        .module('app.dashboard')
        .controller('Dashboard', Dashboard);

    Dashboard.$inject = ['logger'];
    function Dashboard(logger) {
        var vm = this;
        
        activate();

        ////////////////

        function activate() {
            logger.info('Activated Dashboard View');
        }
    }
})();