var mongoose = require("mongoose")
		Schema = mongoose.Schema;


var UnicornSchema = new Schema({
	name: String,
	dob: Date,
	loves: Array,
	weight: Number,
	gender: String,
	vampires: Array
});


module.exports = mongoose.model('Unicorn', UnicornSchema);
