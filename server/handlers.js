"use strict";
var querystring = require('querystring');

function getUserInfo(urlData, db, callback){
	var queryData = querystring.parse(urlData.query);
	var name = queryData.name;

	if(name === undefined){
		return -1;
	}

	var query = "SELECT * FROM cards where deck_index = (SELECT deck_index FROM users where user_name='" + name + "');";
	
	db.query(query, function(result){
		for(var i = 0; i < result.length; i++){
			result[i] = '"' + i + '":' + JSON.stringify(result[1]);
		}
		result = "{" + result.join() + "}";
		callback(result);
	});
}

function modifyDatabase(urlData, db, callback){
	console.log(urlData);
	callback(urlData);
}

function notFound404(){
	return "404 not found";
}

exports.getUserInfo = getUserInfo;
exports.modifyDatabase = modifyDatabase;
exports.notFound = notFound404;


