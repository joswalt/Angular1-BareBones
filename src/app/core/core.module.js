var app;
(function (app) {
    var core;
    (function (core) {
        'use strict';
        angular.module('app.core', [
            /* Angular modules */
            'ngAnimate',
            'ngSanitize',
            /* Cross-app modules */
            'blocks.exception', 'blocks.logger', 'blocks.router',
            /* 3rd-party modules */
            'ui.router'
        ]);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=core.module.js.map