namespace app.feature {
    'use strict';

    interface IFeatureVm {
        products: app.feature.IProduct[]
    }

    class FeatureController implements IFeatureVm {
        products: app.feature.IProduct[];

        static $inject: Array<string> = ['logger', 'dataService'];
        constructor(private _logger: blocks.logger.ILogger,
            private _dataService: app.services.IDataService) {
        }
        
        $onInit = function () {
            this.getProducts().then((results: app.feature.IProduct[]) => {
                this._logger.info("Feature Component loaded.");
            });
        }
        
        getProducts() {
            return this._dataService.getData().then((results: app.feature.IProduct[]) => {
                this.products = results;
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