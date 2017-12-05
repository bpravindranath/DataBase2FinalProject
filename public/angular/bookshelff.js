
var resourceListCTRL = function($scope, bookshelffData, $http){
	$scope.message = "Searching for Resources..."

	bookshelffData
	  .then(function(success) {
	  	$scope.message = (success.data.length > 0) ? success.data.length + " Resources" : "No locations found";
	  	$scope.data = { resources : success.data };

	  },function myError(error){

	  	console.log(error);
	  });
	  	//Deletes Resources from Database by Making an API Delete Request
		$scope.removeItem = function(id){
			//confirms with user if they are sure they want to delete 
			if(confirm("Are you sure you want to delete this?")){
				//creating request for API
				$http({
					method   :     "delete",
					url      :     "/api/resource/" + id,
					data     :     id
					//receive response from API
				}).then(function(success){

					//reload resourceList by making a get request to the API
					$http.get('/api/resource').then(function(success){
					$scope.message = (success.data.length > 0) ? success.data.length + " Resources" : "No locations found";
					$scope.data = {resources: success.data};
					

						//logs error if request was bad
					 }),function Error(error){ console.log(error); };

					 //logs error if request was bad
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



