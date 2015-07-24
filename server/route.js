"use strict";


function route(urlData, handle, db, callback){
	var pathname = urlData.pathname;
	console.log("the pathname for this request is : " + pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](urlData, db, function(result){
			callback(result);
		});
	}else{
		return handle["/404"]();
	}
}

exports.route = route;