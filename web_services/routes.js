var express = require('express'),
	fs = require('fs'),
	db = require('./queries');

var router = express.Router();

router.get('/',function(req, res) {
	fs.readFile('index.html', function(err, html) {
		res.write(html);
		res.end();
	});
});

router.post('/save', db.save);
router.get('/users', db.getUserList);

module.exports = router;