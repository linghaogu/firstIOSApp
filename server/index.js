"use strict";

var server = require('./server');
var handler = require('./handlers');
var route = require('./route');
var db = require('./database');

var handlers = handlers || {};

handlers['/getUserInfo'] = handler.getUserInfo;
handlers['/modifyDB'] = handler.modifyDatabase;
handlers['/404'] = handler.notFound;

server.start(route.route, handlers, db);
