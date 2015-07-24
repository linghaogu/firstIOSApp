"use strict";

var mysql = require('mysql');

var db = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'firstApp',
	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

db.connect();

function dbQuery(q, callback){
	db.query(q, function(err, rows, fields){
		if (err) {
			throw err;
		}
		callback(rows);
	});
}

exports.query = dbQuery;