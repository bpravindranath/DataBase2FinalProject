
var mongoose = require('mongoose');  
var List = mongoose.model('ListData');


module.exports.resourceListbyResource = function(req, res){

	//find all data in collections ListData
	List.find({},function(err, results) {
     // return res.send(results);
    sendJsonResponse(res, 200, results);
  });

};

module.exports.resourceReadOne = function(req, res){
	
	//checks that resourceid exists in request parameters
	if (req.params && req.params.resourceid) {

		List
	      	.findById(req.params.resourceid)
	      	.exec(function(err, location) {
	      		//if Mongoose doesn’t return a location, send 404 message and exit function scope using return statement
	      		if(!location){
	      			sendJsonResponse(res, 404, {
	      				"Message" : "Location Not Found"
	      			});

	      			return;	
	      		} 
	      		//if Mongoose returned an error, send it as 404 response and exit controller using return statement
	      		else if (err) {
	      			sendJsonResponse(res, 404,err);
	      			return;
	      		}

	      		//If Mongoose didn’t error, continue as before and send location object in a 200 response
	        	sendJsonResponse(res, 200, location);
	    	});
	} 

	//If request parameters didn’t include locationid, send appropriate 404 response
	else {
		sendJsonResponse(res, 404, {
    		"Message": "No locationid in Request"
  });

  }
};

module.exports.resourceCreate = function(req, res){



	List.create({

		Source       : req.body.source,
		Type         : req.body.type,
		Title        : req.body.title,
		Description  : req.body.description,
		Category     : req.body.category,
		Rating       : parseInt(req.body.rating, 10),
		 
		},function(err, location) {
	       if (err) {
	      		sendJsonResponse(res, 400, err);
	    } else {
	      		sendJsonResponse(res, 201, location);
	    	}
	});
};

module.exports.resourceUpdateOne = function(req, res){


	if (!req.params.resourceid){
		sendJsonResponse(res, 404, {
			"message" : "Not Found, Location Id Required"
		});
		
		return
	}

	List
		.findById(req.params.resourceid)
		.exec(
			function(err, location){
				if(!location){
					sendJsonResponse(res, 404, {
    					"message": "locationid not found"
		  			});
		  			return;

					} else if (err) {
					  sendJsonResponse(res, 400, err);
					  return; 
					}
					
					location.Source = req.body.source,
					location.Type = req.body.type,
					location.Title = req.body.title,
					location.Description = req.body.description,
					location.Category = req.body.category,
					location.Rating = req.body.rating;

					location.save(function(err, location) {
				     if (err) {
				       sendJsonResponse(res, 404, err);
				     } else {
				       sendJsonResponse(res, 200, location);
						}

					});
				  }
				);
			};

module.exports.resourceDeleteOne = function(req, res){

	var resourceid = req.params.resourceid;

	List.findByIdAndRemove(resourceid, function(err){
		if(err){
			sendJsonResponse(res, 404, err);
			return;
		}
		res.send('deleted');
	})
	

};

var sendJsonResponse = function(res, status, content) {

	 res.status(status);
  	 res.json(content);

};


