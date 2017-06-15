(function (angular) {
    /*1.创建模块：Angular提供了一个全局对象angular，在此全局对象下存在若干的方法，其中angular.module（）方法用来定义一个模块：
    **第一个参数：控制器的名称**
    **第二个参数：依赖模块名称**
    * */
    var app = angular.module("app",[]);
   /* 2.创建控制器:控制器(Controller)作为连接模型(Model)和视图(View)的桥梁存在,所以当我们定义好了控制器以后也就定义好了模型和视图。
    **第一个参数：控制器的名称**
    **第二个参数：依赖的服务**
    */
    app.controller("bbController",["$scope","$rootScope",function ($scope,$rootScope) {
        $rootScope.name1 = "global";
        $scope.name = "test";
        $scope.age  = 2;
        $scope.arr = ["window","office","iso"];
        $scope.bb_user = [
            {"name":"xm","age":18},
            {"name":"hh","age":16}
        ];
        /*3.事件处理
        * ng-事件名称 = "事件响应方法名称(参数)";
         **参数可以自己指定,也可以传入对象$(event)**
         使用$scope来去实现事件定义的方法
         $scope.事件名称 = function(参数){}
       * */
        //定义的事件方法实现
        $scope.click = function (e,ar) {
            alert(this.name);//在这里,this代表$scope
            console.log($scope.age);
        };
        $scope.dblclick = function () {
            alert("dbl")
        };
        $scope.mouserEnter = function () {
            console.log("mouserEnter")
        }
    }]);
    app.directive("nav",[function () {
        /*
        * <nav></nav>           E:元素
         <!-- directive:nav --> A:属性
         <h2 nav></h2>          C:当做类
         <p class="nav"></p>    M:可以注释形式出
        * */
        return{
            //E:元素   A:属性   C:当做类   M:可以注释形式出
            restrict:'EA',
            // template:'<ul><li>列表</li><li>列表</li><li>列表</li></ul>',
            templateUrl:'./nav.html',
            replace:true    //是否替换原标签
        }
    }])
})(angular);