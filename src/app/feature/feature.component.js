(function() {
    'use strict';

    angular
        .module('app.feature')
        .component('appFeature', {
            templateUrl: './app/feature/feature.html',
            controller: FeatureController
        });

    FeatureController.$inject = ['logger', 'dataService'];;
    function FeatureController (logger, dataService) {
        var vm = this;
        vm.products = [];
        
        vm.$onInit = function() {
            return dataService.getData().then(function(results){
                vm.products = results;
                logger.info("Feature Component loaded.");
                
                return vm.products; 
            });
        }
    }
})();