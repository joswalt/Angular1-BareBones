var blocks;
(function (blocks) {
    var logger;
    (function (logger) {
        'use strict';
        var Logger = (function () {
            function Logger($log) {
                this.$log = $log;
            }
            Logger.prototype.log = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                this.$log.log(args);
            };
            Logger.prototype.error = function (message, data, title) {
                this.$log.error('Error: ' + message, '\nSummary:', title, '\nDetails:', data);
            };
            Logger.prototype.info = function (message, data, title) {
                this.$log.info('Info: ' + message, '\nSummary:', title, '\nDetails:', data);
            };
            Logger.prototype.success = function (message, data, title) {
                this.$log.info('Success: ' + message, '\nSummary:', title, '\nDetails:', data);
            };
            Logger.prototype.warning = function (message, data, title) {
                this.$log.warn('Warning: ' + message, '\nSummary:', title, '\nDetails:', data);
            };
            Logger.$inject = ['$log'];
            return Logger;
        }());
        logger.Logger = Logger;
        angular
            .module('blocks.logger')
            .service('logger', Logger);
    })(logger = blocks.logger || (blocks.logger = {}));
})(blocks || (blocks = {}));
//# sourceMappingURL=logger.js.map