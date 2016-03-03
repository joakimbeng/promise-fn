'use strict';
const fnapply = require('promise-fnapply');
const sliced = require('sliced');

module.exports = exports = function (fn, that) {
	return function () {
		const args = sliced(arguments);
		return fnapply(fn, args, that);
	};
};
