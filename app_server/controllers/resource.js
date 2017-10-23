/* RESOURCE PAGES */

/* Get Resource List Page */



var request = require('request');

var apiOptions = {
  server : "http://localhost:3000"
};


//**************************START RESOURCELIST************************************
 var renderResourceList = function(req, res){

 	//got rid of responseBody in parameter
 	// 	var message;
 		
		// if (!(responseBody instanceof Array)) {

		//   message = "API lookup error";
		//   responseBody = [];

		// } else {
		//   if (!responseBody.length) {
		//     message = "No Resources Stored";
		   	
		// 	} 
		// }

        res.render('resourceList', {

		title:'Resource List'

		
		// tableData: {

		// 	tableContent: responseBody

		// },	
		// message: message
	});
  };


module.exports.resourceList = function(req, res){

	renderResourceList(req, res);

	// var requestOptions, path;
	// path = '/api/resource';
	// requestOptions = {
	// 	url : apiOptions.server + path,
 //  		method : "GET",
 //  		json : {}
	// };
	
	// request(
	// 	requestOptions, 
	// 	function(err,respond, body){
			
			//renderResourceList(req,res, body);
	// 	}
	// );
};

//**************************END RESOURCELIST************************************


//**************************BEGIN RESOURCEADD************************************




module.exports.resourceAdd = function(req, res){

	res.render('resourceAdd', {

		title: "Add Resource",
		error: req.query.err
	
	});


};
//**************************END RESOURCEADD************************************





//**************************BEGIN RESOURCEPOST************************************


  module.exports.resourcePost = function(req, res){


	var requestOptions, path, postdata;

	path = '/api/resource/';

	var postData = {

	source: req.body.source,
	type: req.body.type,
	title: req.body.title,
	description: req.body.description,
	category: req.body.category,
	rating: parseInt(req.body.rating, 10)

    };

    requestOptions = {
    	url : apiOptions.server + path,
    	method: "POST",
    	json : postData
    };

    if(!postData.source || !postData.type || !postData.title  || 
       !postData.description || !postData.category || !postData.rating){
    	res.redirect('/resource/add/new?err=val');
    } else {

    request(requestOptions,

     function(err, response, body){
     	console.log(response.statusCode);
     	if (response.statusCode === 201){
     		res.redirect('/resource/');

     	} else if (response.statusCode === 400 && body.name && body.name ==="ValidationError") {

     		res.redirect('/resource/add/new?err=val');

     	} else {
     		console.log(body);
     		_showError(req,res, response.statusCode);
     	}
     }

    );
	}
  };

//**************************END RESOURCEPOST************************************



//**************************BEGIN RESOURCEINFO************************************



var renderDetailPage = function (req, res, resourceDetail) {
 	res.render('resourceInfo', {


		title:'Resource Information',

		sourceDetails: {

			Source: resourceDetail.Source,
			Type: resourceDetail.Type,
			Title: resourceDetail.Title,
			Description: resourceDetail.Description,
			Category: resourceDetail.Category,
			Rating: resourceDetail.Rating
		}

	});


};


/* Get Resource Info Page */
module.exports.resourceInfo = function(req, res){
	
	var requestOptions, path;
	path = "/api/resource/" + req.params.resourceid;
	requestOptions = {
		url : apiOptions.server + path,
  		method : "GET",
  		json : {}
	};
	
	request(
		requestOptions, 
		function(err,respond, body){
			renderDetailPage(req, res, body);
		}
	);
};


//**************************END RESOURCEINFO************************************




