(function (angular) {
    var app = angular.module('app',[]);
    app.controller('bbController',['$scope',function ($scope) {
        $scope.price = 13;
        $scope.nowDate = new Date();
        $scope.course = ['html','js','css'];
        $scope.student = [
            {'name':'zs','age':12},
            {'name':'ls','age':18},
            {'name':'ww','age':20}
        ];
        $scope.str = 'hello world';
        $scope.num = '10'
    }])
})(angular);
