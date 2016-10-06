angular.module('myApp', [])
  .controller('ctrl',function($scope,$http){
        $scope.search=function(){
            $http({
                url: "/tweets",
                method: "GET",
                params: {q: $scope.query}
            }).then(function(response){
                $scope.tweets=angular.fromJson(angular.fromJson(response).data).statuses;
                console.log(angular.fromJson(angular.fromJson(response).data));
            },function(response){
                console.log(angular.fromJson(angular.fromJson(response).data));
                $scope.tweets=angular.fromJson(angular.fromJson(response).data).statuses;
            });

   }
});