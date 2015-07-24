"use strict";

var http = require("http");
var url = require("url");

function start(route, handlers, db){
	function onRequest(req, res){
		var urlData = url.parse(req.url);
		route(urlData, handlers, db, function(content){
			res.writeHead(200, {"Content-Type" : "text/plain"});
			res.write(content);
			//console.log(content);
			res.end();
		});
	}

	http.createServer(onRequest).listen(3000);
}

exports.start = start;