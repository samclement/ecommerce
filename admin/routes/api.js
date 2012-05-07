var app = require('../app');
var User = require("../models/user.js");

/*
 * GET api page.
 */
app.get('/api/users', function(req, res, next){
		console.log(req.params);
		User.find(function(err, users){
			res.send(users);
		});
});