
var resourceListCTRL = function($scope, bookshelffData){
	$scope.message = "Searching for Resources..."

	bookshelffData
	  .then(function(success) {
	  	$scope.message = success.data.length > 0 ? success.data.length + " Resources" : "No locations found";
	  	$scope.data = { resources : success.data };

	  },function myError(error){

	  	console.log(error);
	  });
  
   
 	  
};

var bookshelffData = function ($http){

	return $http.get('/api/resource');
};


angular
  .module('bookshelff',[])
  .controller('resourceListCTRL', resourceListCTRL)
  .service('bookshelffData', bookshelffData);


