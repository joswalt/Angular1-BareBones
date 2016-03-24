(function() {
'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    Shell.$inject = ['logger', 'config'];
    function Shell(logger, config) {
        var vm = this;
        vm.title = config.appTitle;

        activate();

        ////////////////

        function activate() { }
    }
})();