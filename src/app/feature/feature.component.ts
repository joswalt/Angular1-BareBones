namespace app.feature {
    'use strict';

    interface IFeatureVm {
        products: any[]
    }

    class FeatureController implements IFeatureVm {
        products: any[];

        static $inject: Array<string> = ['logger', 'dataService'];
        constructor(private _logger: blocks.logger.ILogger,
            private _dataService: app.services.IDataService) {
        }
        
        $onInit = function () {
            return this._dataService.getData().then((results: any[]) => {
                this.products = results;
                this._logger.info("Feature Component loaded.");

                return this.products;
            });
        }
    }

    angular.module('app.feature')
        .component('appFeature', {
            templateUrl: './app/feature/feature.html',
            controller: FeatureController
        });
}