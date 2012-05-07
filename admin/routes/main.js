var app = require('../app');
/*
 * GET home page.
 */

function requiresLogin(req, res) {
	console.log(req.session);
	// if (req.session.user) {
	// 	next();
	// } else {
	// 	res.redirect('/secure/login?redirect=' + req.url);
	// }
	res.render('index', {
		title: 'Secure'
	});
};

app.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	})
});

app.get('/secure', requiresLogin, function(req, res, next) {
	res.render('index', {
		title: 'Secure Express'
	})
});
