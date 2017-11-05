
var resourceListCTRL = function($scope, bookshelffData, $http){
	$scope.message = "Searching for Resources..."

	bookshelffData
	  .then(function(success) {
	  	$scope.message = (success.data.length > 0) ? success.data.length + " Resources" : "No locations found";
	  	$scope.data = { resources : success.data };

	  },function myError(error){

	  	console.log(error);
	  });
  

		$scope.removeItem = function(id){
				// console.log(id);
				// $http.delete('/api/resource/' + id).success(function(response){
				// 	console.log('hi');
				// });
			
			if(confirm("Are you sure you want to delete this?")){
				$http({
					method: "delete",
					url: "/api/resource/" + id,
					data: id
				}).then(function(success){
					 $http.get('/api/resource').then(function(success){
						 $scope.data = {resources: success.data};
					 }),function Error(error){
						 console.log(error);
					 };
				
				}, function myError(error){
					console.log(error);
				});	
		} else {

			console.log("nothing deleted");
			
		}

	}
	

};


//gets data from Database by calling the API controller
var bookshelffData = function ($http){
	return $http.get('/api/resource');
};


var resourceInfoCtrl = function($scope){


};



var resourceData = function ($http){
	return $http.get('/api/resource');
};



angular
  .module('bookshelff',[])
	.controller('resourceListCTRL', resourceListCTRL)
	.controller('resourceInfoCtrl', resourceInfoCtrl)
	.service('resourceData', resourceData)
	.service('bookshelffData', bookshelffData);



