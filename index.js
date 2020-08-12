var leveljs = require('level-js');
var leveldown = require('leveldown');
var levelup = require('levelup');
var fs = require('level-filesystem');

var db = levelup(leveldown('level-filesystem'), {db:leveljs});
module.exports = fs(db);