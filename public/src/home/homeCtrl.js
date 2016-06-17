angular.module('nodeThree')
.controller('homeCtrl', function ($scope, gameService){


$scope.games=[];
$scope.getGames = () => {
  gameService.getGames()
    .then((response)=>{
      $scope.games =response.data;
  })
}
$scope.getGames();


})
