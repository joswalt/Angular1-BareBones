(function() {
'use strict';

    angular
        .module('app.feature')
        .controller('FeatureController', FeatureController);

    FeatureController.$inject = ['logger', 'DataService'];
    function FeatureController(logger, dataService) {
        var vm = this;
        vm.products = [];
        
        activate();

        ////////////////

        function activate() {
            return dataService.getData().then(function(results){
                vm.products = results;
                logger.info('Activated Feature View');
                
                return vm.products; 
            });
        }
    }
})();