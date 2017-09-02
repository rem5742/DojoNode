var mongoose = require('mongoose');
var schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/dojonode');

var userSchemaJSON = {
	name: String
}

var user_schema = new schema(userSchemaJSON);
var User = mongoose.model('User', user_schema);

function save(req, res)
{
	var user = new User( {name: req.body.name} );

	user.save(function() {
		res.send('Guardamos tus datos');
	});
}

function getUserList(req, res)
{
	User.find(function(err, doc) {
		res.send(doc);
	});
}

module.exports = {
	save: save,
	getUserList: getUserList
}