namespace app.services {
    'use strict';

    export interface IDataService {
        getData: () => ng.IPromise<any>;
    }

    export class DataService implements IDataService {
        static $inject: Array<string> = ['$q'];

        constructor(private $q: ng.IQService) {
        }

        getData: () => ng.IPromise<any> = () => this.$q.when(this.mockData);

        mockData: any[] = [
            {
                productNumber: 3353,
                productPrice: 64.26,
                productName: 'Test Product 1'
            },
            {
                productNumber: 5262,
                productPrice: 43.89,
                productName: 'Test Product 2'
            },
            {
                productNumber: 4575,
                productPrice: 25.75,
                productName: 'Test Product 3'
            }
        ];
    }

    angular
        .module('app.services')
        .service('dataService', DataService);
}