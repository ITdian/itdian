;(function (angular) {
    var app = angular.module('app',[]);
    app.controller('bbController1',['$scope',"$rootScope",function ($scope,$rootScope) {
        $rootScope.name1 = 'global';
        $scope.name = '1'
    }]);
    app.controller('bbController2',['$scope',function ($scope) {
        $scope.name = '2'
    }]);

})(angular);
