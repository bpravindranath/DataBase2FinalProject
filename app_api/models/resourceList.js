var mongoose = require( 'mongoose' ); //define Mongoose schema



var tableDataSchema = new mongoose.Schema ({

	Source: {type: String, required: true},
	Type: {type: String, required: true},
	Title: {type: String, required: true},
	Description: {type: String, required: true},
	Category: {type: String, required: true},
	Rating: {type: Number, required: true, "default": 0, min: 0, max: 5}

});

var listData = mongoose.model('ListData', tableDataSchema);