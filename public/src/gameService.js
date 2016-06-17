angular.module('nodeThree')
.factory('gameService', function($http, ref){
return {
  getGames() {
    return $http.get(`/api/videoGames`);
  }

}
})
