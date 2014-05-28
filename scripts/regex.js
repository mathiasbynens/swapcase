var regenerate = require('regenerate');

var swapMap = require('../data/swap-map.json');
var symbols = Object.keys(swapMap);
var regex = regenerate(symbols).toString();

module.exports = regex;
